const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");
const multer = require("multer");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.render("homepage");
});
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}=${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.redirect("/");
});
app.listen(PORT, () => {
  console.log("Server Started...");
});
