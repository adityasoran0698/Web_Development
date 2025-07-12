const fs = require("fs");

// Sync...

// fs.writeFileSync('./test.html','Hello Aditya')

//Async
// fs.writeFile("./test.txt","Hello Aditya ASYNC",(err)=>{})

// const result=fs.readFile('./contacts.txt',"utf-8");
// console.log(result);

// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log("Error: ",err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString())
fs.cpSync("./test.txt","./copy.txt")
// fs.unlinkSync("./copy.txt")
console.log(fs.statSync("./contacts.txt"));
fs.mkdirSync("my-docs/a/b",{recursive:true})
