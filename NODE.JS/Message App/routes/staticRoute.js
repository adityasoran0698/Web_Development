const express = require("express");
const router = express.Router();
const MESSAGE = require("../model/msg.js");
const { getUser } = require("../service/auth.js");
const { restrictTo } = require("../middlewares/auth.js");

router.get("/", (req, res) => {
  if (!req.user) return res.redirect("./login");
  const user = req.user;
  return res.render("homepage", { user });
});
router.get("/allmsgs", restrictTo(["User", "Admin"]), async (req, res) => {
  const user = req.user;
  const allmsgs = await MESSAGE.find({ createdById: user._id });
  return res.render("msginfo", {
    msgs: allmsgs,
  });
});

router.get("/admin/allmsgs", restrictTo(["Admin"]), async (req, res) => {
  const Allmsgs = await MESSAGE.find({});
  return res.render("Admin", {
    msgs: Allmsgs,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});
router.get("/login", (req, res) => {
  return res.render("login");
});

router.get("/logout", (req, res) => {
  res.clearCookie("uid");
  return res.redirect("/login");
});
module.exports = router;
