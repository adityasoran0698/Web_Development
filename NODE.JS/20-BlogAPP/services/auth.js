const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;
const createTokenForUser = (user) => {
  const payload = {
    _id: user._id,
    email: user.email,
    fullname: user.fullname,
    profileImageURL: user.profileImageURL,
    role: user.role,
  };
  const token = jwt.sign(payload, secret);
  return token;
};
const validateToken = (token) => {
  if (!token) return null;

  return jwt.verify(token, secret);
};
module.exports = {
  createTokenForUser,
  validateToken,
};
