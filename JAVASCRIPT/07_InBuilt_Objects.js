console.log(Math.PI);
console.log(Math.max(23,5,787,2,88,9,7,76,55,43,256,89));
console.log(Math.min(23,5,787,2,88,9,7,76,55,43,256,89));
console.log(Math.random());
console.log(Math.round(2.4));
console.log(Math.ceil(2.4));
console.log(Math.round(Math.random()*100));
console.log(Math.ceil(Math.random()*100));
console.log(Math.pow(2,10));
function clock(){
    let date=new Date();
    console.log(date);
    console.log(date.getHours()-12,":",date.getMinutes(),":",date.getSeconds());
    
}
setInterval(clock,1000);
clock();
