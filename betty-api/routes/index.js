const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../helpers/auth");
const bcrypt = require("bcrypt");
//const zxc = require("zxcvbn");
/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

// router.post("/user/signup", (req, res, next) => {
//   let { email, password, confpassword } = req.body;

//   if (password !== confpassword) {
//     return res
//       .status(400)
//       .json({ error: "Password does not match confirmation." });
//   }
//   if (!email || !password || !confpassword)
//     return res.status(400).json({ error: "Missing info" });

//   const salt = bcrypt.genSaltSync(10);
//   const hashPassword = bcrypt.hashSync(password, salt);

//   User.create({ email, password: hashPassword })
//     .then(user => {
//       console.log(user);
//       jwt.sign(
//         {
//           id: user._id
//         },
//         process.env.SECRET,
//         {
//           expiresIn: 86400
//         },
//         (err, token) => {
//           delete user._doc.password;
//           delete user.roles;
//           if (err) return res.status(500).json({ error: err });
//           res.status(200).json({ user, token });
//         }
//       );
//     })
//     .catch(error => {
//       return res.status(500).json({ error });
//     });
// });

// router.post("/user/login", (req, res, next) => {
//   let { email, password } = req.body;
//   const salt = bcrypt.genSaltSync(10);
//   const hashPassword = bcrypt.hashSync(password, salt);

//   User.findOne({ email })
//     .then(user => {
//       console.log(user);
//       console.log(user.password, "\n", hashPassword);
//       if (bcrypt.compareSync(user.password, hashPassword))
//         return res.status(400).json({ error: "Password don't match" });
//       jwt.sign(
//         {
//           id: user._id
//         },
//         process.env.SECRET,
//         {
//           expiresIn: 86400
//         },
//         (err, token) => {
//           delete user._doc.password;
//           delete user.roles;
//           if (err) return res.status(500).json({ error: err });
//           res.status(200).json({ user, token });
//         }
//       );
//     })
//     .catch(error => {
//       res.status(404).json({ error });
//     });
// });

module.exports = router;
