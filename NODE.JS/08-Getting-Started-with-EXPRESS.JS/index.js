const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Homepage");
});
app.get("/about", (req, res) => {
  return res.send("About Page " + `hey ${req.query.myname}`);
});



app.listen(8000, () => {
  console.log("Server Started...");
});
