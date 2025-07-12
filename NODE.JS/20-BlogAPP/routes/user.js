const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const body = req.body;
    const UploadPath = path.resolve(
      `./public/profilePhotos/${body.fullname}-${body.email}`
    );
    fs.mkdir(UploadPath, { recursive: true }, () => {
      cb(null, UploadPath);
    });
  },
  filename: function (req, file, cb) {
    const body = req.body;
    const filename = `${body.fullname}-${Date.now()}`;
    cb(null, filename);
  },
});

const upload = multer({ storage: storage });
router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.post("/signup", upload.single("profileImageURL"), async (req, res) => {
  const { fullname, email, password } = req.body;
  const file = req.file;
  const profileImageURL = file
    ? `/profilePhotos/${fullname}-${email}/${file.filename}`
    : undefined;
  try {
    const signupdata = await User.create({
      fullname,
      email,
      password,
      profileImageURL: profileImageURL,
    });
  } catch (err) {
    return res.render("signup", {
      error: "User Already Exist!",
    });
  }

  return res.redirect("/user/signin");
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await User.matchPasswordAndGenerateToken(email, password);
    res.cookie("token", token);
    return res.redirect("/");
  } catch (error) {
    return res.render("signin", {
      error: "Incorrect password or email",
    });
  }
});

module.exports = router;
