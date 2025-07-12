let arr=[10,20,30,9,44,5,2,67,11];
let ansArray1=arr.map((number)=>{
    return number*number;
}
);
let ansArray2=arr.map((number,index)=>{
    console.log(number);
    console.log(index);
    return number+0
});
let ansArray3=arr.filter((number)=>{
    if(number%2==0){
        return true;
    }
    else {
        return false;
    }
})
let brr=[22,"aditya","hello",44,78];
let ansArray4=brr.filter((value)=>{
    if(typeof(value)=='string'){
        return true;
    }
    else{
        return false;
    }
})
console.log(ansArray1);
console.log(ansArray2);
console.log(ansArray3);
console.log(ansArray4);


