let div = document.querySelector('.container');

function digitalClock() {
    let date = new Date(); 
    // div.innerHTML = date.toLocaleTimeString();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    if(hours<10){
         hours="0"+hours;
    }
    if(hours>12&&hours<22){
        hours="0"+(hours-12);
    }
    else{
        hours="0"+(hours-12);
    }
    if(minutes<10){
        minutes="0"+minutes;

    }
    if(seconds<10){
        seconds="0"+seconds;

    }
    let time=hours+":"+minutes+":"+seconds
    div.innerHTML=time;
}

digitalClock(); 
setInterval(digitalClock, 1000); 
