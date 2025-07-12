let buttons = document.querySelectorAll("button");
let body = document.querySelector("body");
for(let i=0;i<buttons.length;i++){
    let button=buttons[i];
    button.addEventListener('click',function(e){
        if(e.target.id=='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='red'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='green'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id=='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    })
}
