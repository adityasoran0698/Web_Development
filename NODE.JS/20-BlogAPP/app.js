const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const MongodbConnection = require("./connection.js");
const url =process.env.MONGO_URL;
const path = require("path");
const cookieParser = require("cookie-parser");
const { checkForAuthenticationCookie } = require("./middlewares/auth.js");
MongodbConnection(url);
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkForAuthenticationCookie("token"));
app.use(express.static(path.resolve("./public")));
const userRoute = require("./routes/user.js");
const blogRoute = require("./routes/blog.js");
const Blog = require("./models/blog.js");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.get("/", checkForAuthenticationCookie("token"), async (req, res) => {
  const allblogs = await Blog.find({});
  return res.render("home", {
    user: req.user,
    blogs: allblogs,
  });
});

app.listen(PORT, () => console.log(`Server is Running on PORT: ${PORT}`));
