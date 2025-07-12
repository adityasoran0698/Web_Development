const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");
const { createTokenForUser } = require("../services/auth.js");
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    salt: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    profileImageURL: {
      type: String,
      required: true,
      default: "/images/default.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");
  this.salt = salt;
  this.password = hashedPassword;
  next();
});

userSchema.static(
  "matchPasswordAndGenerateToken",
  async function (email, password) {
    const user = await this.findOne({ email: email });
    if (!user) throw new Error("User Not Found");

    const salt = user.salt;
    const hashedPassword = user.password;
    const UserProvideHas = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashedPassword !== UserProvideHas)
      throw new Error("Incorrect Paasword");
    const token = createTokenForUser(user);
    return token;
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
