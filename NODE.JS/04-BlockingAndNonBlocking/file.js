// const fs = require('fs');
const os = require("os");

// // fs.writeFileSync('file.txt', 'Hello, World!');

// console.log("1");
// console.log("2");
// console.log("3");

// // //Blocking read
// // const result=   fs.readFileSync('file.txt', 'utf8');
// // console.log(result);

// // // Non-blocking read
// // fs.readFile('file.txt',"utf-8",(err,result)=>{
// //     if(err){
// //         console.error("Error reading file:", err);
// //     } else {
// //         console.log("File content:", result);
// //     }
// // })

// console.log("4");
// console.log("5");
// console.log("6");

console.log(os.cpus().length);