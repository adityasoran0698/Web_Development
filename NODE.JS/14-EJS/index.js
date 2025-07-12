const express = require("express");
const app = express();
const PORT = 8000;
const url = "mongodb://127.0.0.1:27017/URL-SHORTNER";
const MongodbConnection=require("./connection.js")
const path=require("path")
const staticRouter=require("./routes/staticRoute.js")
MongodbConnection(url);
const urlRouter = require("./routes/url.js");
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/url", urlRouter);
app.use("/",staticRouter)
app.listen(PORT, () => console.log("Server Started..."));
