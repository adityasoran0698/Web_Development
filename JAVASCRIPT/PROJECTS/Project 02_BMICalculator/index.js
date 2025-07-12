let form = document.querySelector("form");

function bmicalc(e) {
  e.preventDefault();

  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  
  let result = document.getElementById("results");
  if (
   height == "" ||
   height <= 0 ||
   isNaN(height) ||
   weight == "" ||
   weight <= 0 ||
   isNaN(weight)
 ) {
   result.innerHTML = "Invalid details!";
   return;
 }
  let bmi = weight / ((height / 100) * (height / 100));
  bmi = bmi.toFixed(2);
  
  if (bmi < 18.6) {
    result.innerHTML = "UNDER WEIGHT: " + bmi;
  }
  if (bmi > 18.6 && bmi < 24.9) {
    result.innerHTML = "NORMAL WEIGHT: " + bmi;
  }
  if (bmi > 24.9) {
    result.innerHTML = "OVER WEIGHT: " + bmi;
  }
}
form.addEventListener("submit", bmicalc);
