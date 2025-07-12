const fs=require('fs')
const http=require('http')
const url=require('url')
const myServer=http.createServer((req,res)=>{
   if(req.url==='/favicon.ico'){
        return res.end();
  }
    const log=`Request Recieved!\n Time:${new Date()}\n Method:${req.method}\n Path:${req.url}\n\n`;
      const MyUrl=url.parse(req.url,true)
      console.log(MyUrl);
       
    fs.appendFile("log.txt",log,(err,data)=>{
    
      if(MyUrl.pathname==='/'){
        res.end("Home Page")
      }
      else if(MyUrl.pathname==='/about'){
        res.end(`About Page ${MyUrl.query.myname}`)
      }
      else if(req.url=="/signup"){
        if(req.method==='GET'){
          res.end("This is a signup form")
        }
        else if(req.method==='POST'){
          // DB QUERY
          res.end("SUCCESS")
        }
      }
      else{
        res.end("404 not found !!")
      }

    })
})
myServer.listen(8000,()=>{
    console.log("Server Started...");
})


