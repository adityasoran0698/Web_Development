function changeText(){
let para=document.getElementById("fpara")
fpara.textContent="hello jii";
}
fpara.addEventListener('click',changeText);
// fpara.removeEventListener('click',changeText); for removing event listener
let anchortag=document.getElementById('fanchor');
anchortag.addEventListener('click',function(event){
    event.preventDefault();
    anchortag.textContent="Done";
})