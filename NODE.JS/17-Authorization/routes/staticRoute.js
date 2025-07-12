const express = require("express");
const router = express.Router();
const URL = require("../models/url.js");
const { restrictTo } = require("../middlewares/auth.js");

router.get("/", restrictTo(["User", "Admin"]), async (req, res) => {
  const allurls = await URL.find({ createdById: req.user._id });

  res.render("home", {
    urls: allurls,
  });
});
router.get("/admins/urls", restrictTo(["Admin"]), async (req, res) => {
  const allurls = await URL.find({});

  res.render("AdminHome", {
    urls: allurls,
  });
});
router.get("/signup", async (req, res) => {
  return res.render("signup");
});
router.get("/login", async (req, res) => {
  return res.render("login");
});
router.get("/role", (req, res) => {
  return res.render("login");
});

module.exports = router;
