const sliderValue = document.getElementsByClassName("length")[0];
const slider = document.getElementsByClassName("range")[0];
const bar = document.querySelectorAll(".box");
const strength = document.getElementsByClassName("med")[0];
const checkbox = document.querySelectorAll(".check");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");

slider.oninput = function () {
  sliderValue.innerHTML = slider.value;
  if (
    slider.value > 13 ||
    (upper.checked && lower.checked && number.checked && symbol.checked)
  ) {
    strength.innerHTML = "VERY STRONG";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = "#A4FFAF";
        bar[i].style.border = "none";
      }
    }
  } else if (
    (slider.value > 10 && slider.value < 13) ||
    (upper.checked && number.checked && symbol.checked) ||
    (lower.checked && upper.checked && symbol.checked) ||
    (number.checked && symbol.checked && lower.checked) ||
    (number.checked && lower.checked && upper.checked)
  ) {
    strength.innerHTML = "STRONG";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 1; i++) {
        bar[i].style.backgroundColor = "#F8CD65";
        bar[i].style.border = "none";
      }
    }
  } else if (
    (slider.value > 7 && slider.value < 10) ||
    (upper.checked && number.checked) ||
    (symbol.checked && lower.checked) ||
    (upper.checked && symbol.checked) ||
    (number.checked && symbol.checked) ||
    (lower.checked && upper.checked)
  ) {
    strength.innerHTML = "MEDIUM";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 2; i++) {
        bar[i].style.backgroundColor = "#FB7C58";
        bar[i].style.border = "none";
      }
    }
  } else if (
    upper.checked ||
    lower.checked ||
    number.checked ||
    symbol.checked
  ) {
    strength.innerHTML = "TOO WEAK";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 3; i++) {
        bar[i].style.backgroundColor = "#F64A4A";
        bar[i].style.border = "none";
      }
    }
  }
};
