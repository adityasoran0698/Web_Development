const express = require("express");
const app = express();
const PORT = 8000;
const url = "mongodb://127.0.0.1:27017/URL-SHORTNER";
const MongodbConnection=require("./connection.js")
MongodbConnection(url);
const urlRouter = require("./routes/url.js");
app.use(express.json());
app.use("/url", urlRouter);
app.listen(PORT, () => console.log("Server Started..."));
