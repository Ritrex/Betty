const express = require("express");

const router = express.Router();
const Proceso = require("../models/Proceso");
const User = require("../models/User");
const Organization = require("../models/Organization");
router.post("/create", (req, res, next) => {
  let { name, admin } = res.body;
  Proceso.create({ name, admin })
    .then(proceso => {
      return res.status(200).json({ proceso });
    })
    .catch(error => {
      return res.status(400).json({ error });
    });
});

router.post("/delete/:id", (req, res, next) => {
  let { id } = req.params;
  Proceso.findByIdAndDelete(id)
    .then(proceso => {
      return res.status(200).json({ proceso });
    })
    .catch(error => {
      return res.status(400).json({ error });
    });
});
router.post("/update/:id", (req, res, next) => {
  let { id } = req.params;
  let { name, adminname, organizationid } = req.body;
  let promises = [];
  promises.push(
    ...[
      name,
      adminname ? User.find({ name: adminname }) : undefined,
      organization ? Organization.findById(organizationid) : undefined,
      Proceso.findById(id)
    ]
  );
  if (promises.length > 0)
    Promise.all(promises).then(proms => {
      let process = proms[3];
      if (typeof process !== "Proceso")
        return res.status(404).json({ error: process });
      let name = proms[0];
    });
  return res.status(500).json({ error: "No values provided" });
});

router.post("/:id", (req, res, next) => {
  let { id } = req.params;
  Proceso.findById(id)
    .then(proceso => {
      return res.status(200).json({ proceso });
    })
    .catch(error => {
      return res.status(404).json({ error });
    });
});

module.exports = router;
