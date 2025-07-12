class human{
    age=30;
    wt=90;
    ht=6;
     walking(){
     console.log("I am Walking");
    }
    running(){
        console.log("I am running");
    }
    eating(){
        console.log("I am eating");
    }
}
let a=new human();
console.log(a.age);
console.log(a.wt);
console.log(a.ht);
a.walking();
a.running();
a.eating();
