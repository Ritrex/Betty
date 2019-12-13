const express = require("express");
const router = express.Router();
const User = require("../models/[Item here]");

router.post("/create", (req, res, next) => {
  let {[Contents]}=res.body
  [Item here].create({[Contents]})
  .then([Item]=>{
    
  })
  .catch(error=>{
    return res.status([Error Number]).json({error})
  })
});
router.post("/delete", (req, res, next) => {});
router.post("/update/:id", (req, res, next) => {
  let {id}=req.params
  [Item here].findbyId(id)
  .then([item]=>{
    return res.status(200).json({[item]})
  })
  .catch(error=>{
    return res.status(500).json({error})
  })
});

router.post("/:id", (req, res, next) => {});

module.exports = router;
