const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
console.log(randomColor());
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let intervalID = null;
start.addEventListener("click", function () {
  function colorChange() {
    document.body.style.backgroundColor = randomColor();
  }
  if (intervalID == null) {
    intervalID = setInterval(colorChange, 1000);
  }
});
stop.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});
