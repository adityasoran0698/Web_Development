const http = require("http");
const fs=require('fs');
const myServer = http.createServer((req, res) => {
 const log=`${Date.now()}: ${req.url} New request Received\n`;
//  fs.appendFile("log.txt",log,(err,data)=>{
//        res.end("Hello from server");
//  })
 fs.appendFile("log.txt",log,(err,data)=>{
     if(req.url=='/'){
       res.end("Home Page")
     }
     else if(req.url=='/about'){
       res.end("My name is Aditya soran")
     }
     else{
       res.end("404! not found")
     }
 })

});
myServer.listen(8000,()=>{
       console.log("Server Started");
})
