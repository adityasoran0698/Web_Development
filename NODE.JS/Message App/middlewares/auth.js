const { getUser } = require("../service/auth.js");
const checkForAuthentication = (req, res, next) => {
  const token = req.cookies?.uid;
  console.log(req.cookies);
  req.user = null;
  if (!token) {
    return next();
  }
  const user = getUser(token);

  req.user = user;
  console.log(req.user);

  return next();
};

const restrictTo = (roles) => {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("Unauthorized");
    return next();
  };
};
module.exports = { checkForAuthentication, restrictTo };
