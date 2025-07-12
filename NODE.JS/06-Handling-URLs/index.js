const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }

  const log = `Request Recieved ${new Date()} ${req.url}\n`;
  const Myurl = url.parse(req.url, true);
  console.log(Myurl);
  const username = Myurl.query.username;
  fs.appendFile("log.txt", log, (err, data) => {
    if (Myurl.pathname === "/") {
      res.end(`Hi ${username}`);
    } else if (Myurl.pathname === "/about") {
      res.end(`About Page ${username}`);
    } else {
      res.end("404 Not Found!!!");
    }
  });
});
myServer.listen(8000, () => {
  console.log("Server Started...");
});
