const sliderValue = document.getElementsByClassName("length")[0];
const slider = document.getElementsByClassName("range")[0];
const bar = document.querySelectorAll(".box");
const strength = document.getElementsByClassName("med")[0];
const checkbox = document.querySelectorAll(".check");
let checkedCount = 0;
function countCheckedCheckboxes() {
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checkedCount++;
    }
  }
  return checkedCount;
}
for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener("change", countCheckedCheckboxes);
}

checkbox.addEventListener("click",countCheckedCheckboxes) (
  sliderValue.innerHTML = this.value;
  if (slider.value < 7 || checkedCount <= 1) {
    strength.innerHTML = "TOO WEAK";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 3; i++) {
        bar[i].style.backgroundColor = "#F8CD65";
        bar[i].style.border = "none";
      }
    }
  } else if ((slider.value > 7 && slider.value < 10) || checkedCount === 2) {
    strength.innerHTML = "MEDIUM";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 2; i++) {
        bar[i].style.backgroundColor = "#F8CD65";
        bar[i].style.border = "none";
      }
    }
  } else if ((slider.value > 10 && slider.value < 13) || checkedCount === 3) {
    strength.innerHTML = "STRONG";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length - 1; i++) {
        bar[i].style.backgroundColor = "#F8CD65";
        bar[i].style.border = "none";
      }
    }
  } else if (slider.value > 13 || checkedCount === 4) {
    strength.innerHTML = "VERY STRONG";
    for (let j = 0; j < bar.length; j++) {
      bar[j].style.backgroundColor = "#18171F";
      for (let i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor = "#F8CD65";
        bar[i].style.border = "none";
      }
    }
  }
);
