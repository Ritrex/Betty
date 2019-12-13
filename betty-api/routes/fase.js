const express = require("express");
const router = express.Router();
const Fase = require("../models/Fase");

router.post("/create", (req, res, next) => {
  let {
    procesoid,
    admin,
    name
  } = res.body;

  Fase.create({
      procesoid,
      admin,
      name
    })
    .then(fase => {})
    .catch(error => {
      return res.status(500).json({
        error
      });
    });
});
// router.post("/delete", (req, res, next) => {return});
router.post("/update/:id", (req, res, next) => {
  let {
    id
  } = req.params;
  let {
    procesoid,
    name,
    adminid
  } = req.body;
  Fase.findByIdAndUpdate({
      procesoid,
      name,
      adminid
    })
    .then(proceso => {
      return res.status(200).json({
        proceso
      });
    })
    .catch(error => {
      return res.status(404).json({
        error
      });
    });
});

router.post("/:id", (req, res, next) => {
  let {
    id
  } = req.params;
  Fase.find({
      _id: id
    })
    .populate("procesoid")
    .populate("adminid")
    .then(fase => {
      return res.status(200).json({
        fase
      });
    })
    .catch(error => {
      return res.status(500).json({
        error
      });
    });
});

module.exports = router;