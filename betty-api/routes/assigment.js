const express = require("express");
const router = express.Router();
const Assginment = require("../models/Assginment");

router.post("/create", (req, res, next) => {
  let { user, details } = req.body;
  Assginment.Assginment.create({ user, details })
    .then(assignment => {
      res.status(200).json({ assginment });
    })
    .catch(error => {
      return res.status(404).json({ error });
    });
});
//router.post("/delete", (req, res, next) => {});
router.post("/update/:id", (req, res, next) => {
  let { id } = req.params;
  let { user, details } = req.body;
  Assginment.findbyId(id)
    .then(assginment => {
      return res.status(200).json({ assginment });
    })
    .catch(error => {
      return res.status(500).json({ error });
    });
});

router.post("/:id", (req, res, next) => {
  let { id } = req.params;
  Assginment.findbyId(id)
    .then(assignment => {
      res.status(200).json({ assignment });
    })
    .catch(error => {
      return res.status(404).json({ error });
    });
});

router.get("/user", (req, res) => {
  let { user } = req.body;
  Assginment.find({ adminid: user.id })
    .then(assginments => {
      return res.status(200).json(assginments);
    })
    .catch(error => {
      return res.status(404).json(error);
    });
});
module.exports = router;
