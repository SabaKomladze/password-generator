const sliderValue = document.getElementsByClassName("length")[0];
const slider = document.getElementsByClassName("range")[0];
const bar = document.querySelectorAll(".box");
const strength = document.getElementsByClassName("med")[0];
const checkbox = document.querySelectorAll(".check");
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
strength.innerHTML = "";
slider.oninput=function (){
  sliderValue.innerHTML = this.value;
let selectedCount = 0;
for (let i = 0; i < checkbox.length; i++) {
  if (checkbox[i].checked) {
    selectedCount++;
  }
}


if (selectedCount === 1) {
  strength.innerHTML = "TOO WEAK";
  for (let j = 0; j < bar.length; j++) {
    bar[j].style.backgroundColor = "#18171F";
    for (let i = 0; i < bar.length - 3; i++) {
      bar[i].style.backgroundColor = "#F64A4A";
      bar[i].style.border = "none";
    }
  }
} else if (selectedCount === 2) {
  strength.innerHTML = "WEAK";
  for (let j = 0; j < bar.length; j++) {
    bar[j].style.backgroundColor = "#18171F";
    for (let i = 0; i < bar.length - 2; i++) {
      bar[i].style.backgroundColor = "#FB7C58";
      bar[i].style.border = "none";
    }
  }
} else if (selectedCount === 3) {
  strength.innerHTML = "MEDIUM";
  for (let j = 0; j < bar.length; j++) {
    bar[j].style.backgroundColor = "#18171F";
    for (let i = 0; i < bar.length - 1; i++) {
      bar[i].style.backgroundColor = "#F8CD65";
      bar[i].style.border = "none";
    }
  }
} else if (selectedCount === 4) {
  strength.innerHTML = "STRONG";
  for (let j = 0; j < bar.length; j++) {
    bar[j].style.backgroundColor = "#18171F";
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "#A4FFAF";
      bar[i].style.border = "none";
    }
  }
} else {
  strength.innerHTML = "";
}
}
