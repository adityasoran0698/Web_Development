const express = require("express");

const mongoose = require("mongoose");

const PORT = 8000;

const userRouter = require("./routes/user.js");

const app = express();

const fs = require("fs");

const { connectMongodb } = require("./connection");

connectMongodb("mongodb://127.0.0.1:27017/Mock_DATA1");

const { logReqRes } = require("./middlewares");

app.use(logReqRes("Log.txt"));

app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log("Sever Started...");
});
// Routes
app.use("/api/user", userRouter);
