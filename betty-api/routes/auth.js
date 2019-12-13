const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../helpers/auth");
const bcrypt = require("bcrypt");

router.post("/signup", (req, res, next) => {
  let { email, name, password, confpassword } = req.body;
  console.log(email, name, password, confpassword);
  if (password !== confpassword) {
    return res
      .status(400)
      .json({ error: "Password does not match confirmation." });
  }
  if (!email || !password || !confpassword)
    return res.status(400).json({ error: "Missing info" });
  // const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // if (email.match(emailValidator))
  // return res.status(400).json({ error: "Invalid Email" });
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  User.create({ email, password: hashPassword, name })
    .then(user => {
      console.log(user);
      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        {
          expiresIn: 86400
        },
        (err, token) => {
          delete user._doc.password;
          delete user.roles;
          if (err) return res.status(500).json({ error: err });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      return res.status(500).json({ error: "Failed to create:\n" + error });
    });
});

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  User.findOne({ email })
    .then(user => {
      console.log(user);
      console.log(user.password, "\n", hashPassword);
      if (bcrypt.compareSync(user.password, hashPassword))
        return res.status(400).json({ error: "Password don't match" });
      jwt.sign(
        {
          id: user._id
        },
        process.env.SECRET,
        {
          expiresIn: 6000
        },
        (err, token) => {
          delete user._doc.password;
          delete user.roles;
          if (err)
            return res.status(500).json({ error: "Failed inside:\n" + err });
          res.status(200).json({ user, token });
        }
      );
    })
    .catch(error => {
      return res.status(404).json({ error });
    });
});

// router.post("/delete", (req, res, next) => {
//   let { id } = req.body;
//   User.findByIdAndDelete(id)
//     .then(removeduser => {
//       return res.status(200).json({ removeduser });
//     })
//     .catch(error => {
//       return res.status(400).json({ error });
//     });
// });

module.exports = router;
