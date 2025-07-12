const User = require("../models/user.js");
const { v4: uuidv4 } = require("uuid");
const { setUser, getUser } = require("../service/Auth");
const UserSignup = async (req, res) => {
  const body = req.body;
  const user = await User.create({
    name: body.name,
    email: body.email,
    password: body.password,
  });
  res.redirect("/");
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
