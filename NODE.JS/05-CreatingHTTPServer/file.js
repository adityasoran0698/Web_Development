const http = require("http");
const fs = require("fs");
const myServer = http.createServer((req, res) => {
  fs.appendFile(
    "Log2.txt",
    `Date: ${new Date()}, url:${req.url}\n`,
    (err, data) => {
      if (req.url == "/") {
        res.end("Hello form Server");
      } else if (req.url == "/about") {
        res.end("My name is Aditya Soran");
      } else if (req.url == "/contact") {
        res.end("My contact number is 1234567890");
      } else if (req.url == "/help") {
        res.end("How can I help you?");
      } else if (req.url == "/services") {
        res.end("We provide various services");
      } else {
        res.end("404! Not Found");
      }
    }
  );
});
myServer.listen(8001,()=>{
console.log("Server Started");
})
