let obj={
    name:"Aditya",
    age:21,
    height:"6ft",
    weight:"90kg",
    BMI:function(height,weight){
        bmi_value=(weight/(height*0.3048)**2);
        if(bmi_value>18&&bmi_value<=25){
            console.log("Normal");
            
        }
        else if(bmi_value>25){
            console.log("Overweight");
            
        }
        else{
            console.log("Underweight");
            
        }
    }
}
console.log(obj);
obj.BMI(6,60);

 //Creation of Arrays
 let arr=[45,"Hello","Aditya",899];
 console.log(arr);

 //Array Constructor
const brr = new Array(10,'Hello',20,30);
console.log(brr);
//PUSH
brr.push(100);
console.log(brr);
//POP
brr.pop();
console.log(brr);
//SHIFT
brr.shift();
console.log(brr);
//UNSHIFT
brr.unshift(100);
console.log(brr);
//SLICE
console.log(brr.slice(0,2));
//SPLICE
brr.splice(1,3,"Aditya");
//SORT
let crr=[6,9,1,67,3,90];
console.log(crr);
crr.sort(((a,b)=>a-b));
console.log(crr);