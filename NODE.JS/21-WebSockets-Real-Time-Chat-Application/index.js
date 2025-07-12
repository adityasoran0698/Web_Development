const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

app.use(express.static("./public"));
app.get("/", (req, res) => {
  return res.sendFile("/index.html");
});

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("user-message", (data) => {
    io.emit("message", data);
  });
});
server.listen(8000, () => console.log("Server is Running on 8000"));
