const User = require("../model/user.js");
// const jwt = require("jsonwebtoken");
const { setUser } = require("../service/auth.js");
const UserSignup = async (req, res) => {
  const body = req.body;
  const user = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
    role: body.role,
  });
  res.redirect("/login");
};
const UserLogin = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({
    email: body.email,
    password: body.password,
  });
  if (!user) {
    return res.render("login");
  }
  const token = setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
};
module.exports = {
  UserSignup,
  UserLogin,
};
