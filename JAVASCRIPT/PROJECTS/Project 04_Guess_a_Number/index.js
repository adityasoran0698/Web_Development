const userInput = document.querySelector(".text");
const submit = document.querySelector("#button");
let RadmomNumber = parseInt(Math.random() * 100 + 1);
const StartOver = document.querySelector(".results");
const GuessSlot = document.querySelector(".Prevguesses");
const lastresult = document.querySelector(".lastresult");
const LowOrHi = document.querySelector("#LOWorHI");
const p = document.createElement("p");
let Prevguesses = [];
let playgame = true;
let numGuess = 1;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    ValidateGuess(guess);
  });
}
function ValidateGuess(guess) {
  if (isNaN(guess)) {
    alert("Invalid Input!");
  } else if (guess <= 0 || guess > 100) {
    alert("Please Enter a Number between 1 and 100 only");
  } else {
    Prevguesses.push(guess);
    if (numGuess == 10) {
      cleanupGuess(guess);
      displayMessage("Game Over. Random Number was " + RadmomNumber);
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == RadmomNumber) {
    displayMessage("You Guessed it Right!");
    endGame();
  } else if (guess < RadmomNumber) {
    displayMessage("Number is TOO low");
  } else if (guess > RadmomNumber) {
    displayMessage("Number is TOO high");
  }
}
function cleanupGuess(guess) {
  userInput.value = "";
  GuessSlot.innerHTML += guess + " ";
  numGuess++;
  lastresult.innerHTML = 11 - numGuess;
}

function displayMessage(message) {
  LowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  StartOver.appendChild(p);
  playgame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    RadmomNumber = parseInt(Math.random() * 100 + 1);
    Prevguesses = [];
    numGuess = 1;
    lastresult.innerHTML = 11 - numGuess;
    userInput.removeAttribute("disabled");
    StartOver.removeChild(p);
    playgame = true;
    LowOrHi.innerHTML = "";
    GuessSlot.innerHTML = "";
  });
}
