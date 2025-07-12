// Reflow is used for recalculating the layout and content of the DOM to be shown on the screen
// Repaint is used to redrawing the layout and content of DOM.It is used to visualize the changes occur in DOM
//Reflow takes more time and repaint takes very less time

//code1
const t1=performance.now();
for(let i=0;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    // 100 reflow and 100 repaint
    document.body.appendChild(para);
}
const t2=performance.now();
console.log("Total time taken by code1: "+(t2-t1));
// code1 is time consuming as there are 100 reflows and 100 repaints


//code2
const t3=performance.now();
let mydiv=document.createElement('div');
for(let i=0;i<=100;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i;
    mydiv.appendChild(para);
}
// 1 reflow and 1 repaint
document.body.appendChild(mydiv);
const t4=performance.now();
console.log("The time take by code2 is "+(t4-t3));
//code 2 is less time consuming as there are only 1 reflow and 1 repaint


//Best code
const t5=performance.now();

let fragment=document.createDocumentFragment();
for(let i=0;i<=100;i++){
    let para=document.createElement('p')
    para.textContent="This is para "+i;
    fragment.appendChild(para);
}
document.body.appendChild(fragment);
const t6=performance.now();
console.log("The time take by code3 is "+(t6-t5));