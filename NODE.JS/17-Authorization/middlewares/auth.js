const { getUser } = require("../service/Auth");
function checkForAuthentication(req, res, next) {
  const userToken = req.cookies?.token;
  req.user = null;
  if (!userToken) {
    return next();
  }
  const token = userToken;
  const user = getUser(token);
  req.user = user;
  return next();
}
function restrictTo(roles) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) {
      return res.end("UnAuthorized");
    }
    return next();
  };
}
module.exports = {
  checkForAuthentication,
  restrictTo,
};
