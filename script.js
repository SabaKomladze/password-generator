const sliderValue = document.getElementsByClassName("length")[0];
const slider = document.getElementsByClassName("range")[0];
const bar = document.querySelectorAll(".box");
const strength = document.getElementsByClassName("med")[0];
const checkbox = document.querySelectorAll(".check");
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const number = document.getElementById('number');
const symbol = document.getElementById('symbol');
const button = document.getElementById('btn');
const screen = document.getElementById('screen');
strength.innerHTML = "";

button.addEventListener('click', () => {
  screen.value = generatePassword();
  strengthPass();
  
});

screen.addEventListener("click", () => {
  const password = screen.innerHTML;
  navigator.clipboard.writeText(password).then(() => {
    alert("Password copied to clipboard!");
  });
});

slider.oninput=function (){
  sliderValue.innerHTML = this.value;
}

function strengthPass(){
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
function generatePassword() {
  const length = slider.value;
  let charset = "";
  
  if (upper.checked) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (lower.checked) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (number.checked) {
    charset += "0123456789";
  }
  if (symbol.checked) {
    charset += "!@#$%^&*()_+";
  }
  let genPassword = "";
  if(charset.length === 0){
    return "";
  }
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    genPassword += charset[randomIndex];
  }
  return genPassword;
  
}


