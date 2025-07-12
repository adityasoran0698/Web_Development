const express = require("express");
const app = express();
const PORT = 8000;
const Msgrouter = require("./routes/msg.js");
const Staticrouter = require("./routes/staticRoute.js");
const UserRoute = require("./routes/user.js");
const MongodbConnection = require("./connection.js");
const path = require("path");
const url = "mongodb://127.0.0.1:27017/SentMessages";
const cookieParser = require("cookie-parser");
const { checkForAuthentication, restrictTo } = require("./middlewares/auth.js");
MongodbConnection(url);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(checkForAuthentication)
app.use("/send",  Msgrouter);
app.use("/", Staticrouter);
app.use("/user", UserRoute);
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.listen(PORT, () => {
  console.log("Server is Running...");
});
