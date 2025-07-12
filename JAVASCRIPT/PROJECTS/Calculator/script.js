let buttons = document.querySelectorAll("button");
let text = document.querySelector("#txt");
let input = "";
for (let i = 0; i < buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function (e) {
    if (button.id == "one") {
      input +="1";
    }
    if (button.id == "two") {
      input += "2";
    }
    if (button.id == "three") {
      input += "3";
    }
    if (button.id == "four") {
      input += "4";
    }
    if (button.id == "five") {
      input += "5";
    }
    if (button.id == "six") {
      input += "6";
    }
    if (button.id == "seven") {
      input += "7";
    }
    if (button.id == "eight") {
      input += "8";
    }
    if (button.id == "nine") {
      input += "9";
    }
    if (button.id == "doublezero") {
      input += "00";
    }
    if (button.id == "zero") {
      input += "0";
    }
    if (button.id == "plus") {
      input +="+";
    }
    if (button.id == "minus") {
      input += "-";
    }
    if (button.id == "divide") {
      input += "/";
    }
    if (button.id == "point") {
      input += ".";
    }
    if (button.id == "mult") {
      input += "*";
    }
    if (button.id == "per") {
      input += "%";
    }
    if(button.id=="clear"){
        input=input.slice(0,-1);
    }
    if (button.id == "equal") {
        
        try{
         input=eval(input);
        }
        catch{
            input='Error!'
        }
        text.value = input;
        return;
    }
    
    if(button.id=="AC"){
        input='';
    }
    text.value = input;

  });
}
