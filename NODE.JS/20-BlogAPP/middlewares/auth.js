const { validateToken } = require("../services/auth.js");
const checkForAuthenticationCookie = (cookiename) => {
  return function (req, res, next) {
    const token = req.cookies[cookiename];
    if (!token) return next();
    try {
      const user = validateToken(token);
      req.user = user;
    } catch (error) {}
    return next();
  };
};

module.exports = {
  checkForAuthenticationCookie,
};
