let paras=document.querySelectorAll('p');
function alertpara(event){
    if(event.target.nodeName=='SPAN'||event.target.nodeName=='SPAN'||event.target.nodeName=='SPAN'||event.target.nodeName=='SPAN'){
        alert("You have clicked on "+event.target.textContent);

    }
}
for(let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener('click',alertpara)
}