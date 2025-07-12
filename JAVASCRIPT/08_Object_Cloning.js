let obj1={
    age:20,
    wt:90,
    ht:100
}
let obj2=obj1;
console.log(obj1);
console.log(obj2);
obj2.age=21
console.log(obj1);
console.log(obj2); 
// Not a actual cloning because obj1 has also changed.

//Cloning by spread operator
// obj2={...obj1};
// obj2.age=40
// console.log(obj1);
// console.log(obj2);

//Cloning by assign method
// obj3={
//     name:"Rahul",
//     Address:"Delhi"
// }
// obj1=Object.assign({},obj2,obj3);
// obj2.age=40
// console.log(obj1);
// console.log(obj2);

// Cloning by Iteration Method
let obj4={}
for(let key in obj1){
    let newKey=key;
    let newValue=obj1[key];
    //Cloning
    obj4[newKey]=newValue;
}
obj1.age=4
console.log(obj1);
console.log(obj4);