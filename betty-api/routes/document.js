const express = require("express");
const router = express.Router();
const Doc = require("../models/Document");
const upload = require("../helpers/multer");

router.post(
  "/create",
  upload.fields(["image", "audio", "text"]),
  (req, res, next) => {
    let { faseid } = req.body;
    let { secure_url: url } = req.file;
    Doc.create({ faseid, url })
      .then(doc => {
        return res.status(200).json({ doc });
      })
      .catch(error => {
        return res.status(500).json({ error });
      });
  }
);
router.post("/delete/:id", (req, res, next) => {
  let { id } = req.params;
  Doc.findByIdAndDelete(id)
    .then(deleteddoc => {
      return res.status(200).json({ deleteddoc });
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
});

router.post("/update/:id", upload.array("files"), (req, res, next) => {
  let { id } = req.params;

  let { faseid, estado } = req.body;
  let { files } = req.files;
  let urls = [];
  for (const file of files) {
    urls.push(file.secure_url);
  }
  Doc.findByIdAndUpdate(id, { url: urls, faseid, estado })
    .then(doc => {
      return res.status(200).json({ doc });
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
});

router.get("/:id", (req, res, next) => {
  let { id } = req.params;

  Doc.findbyId(id)
    .then(doc => {
      return res.status(200).json({ doc });
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
});

router.get("/all", (req, res) => {
  DeviceOrientationEvent.find().then(docs => {});
});
module.exports = router;
