const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const nodemailer = require("nodemailer")
router.post("/create", (req, res, next) => {
  let {

    ids,
    message,
    roles

  } = res.body;
  Notification.create({

      recipientid,
      message

    })
    .then(notification => {
      console.log(notification.message)

    })
    .catch(error => {
      return res.status(500).json({
        error
      })
    })
});



module.exports = router;