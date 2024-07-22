const label = document.querySelector("label");
const passLength = document.querySelector("#password_length");
const btnGenerate = document.querySelector("#generate_pass");
const passAreas = document.querySelectorAll(".password_area");
const passCopy = document.querySelectorAll(".pass_copy");
const passField = document.querySelector(".password_field");
const errorField = document.querySelector(".error_field");

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowerCase = upperCase.map((letter) => letter.toLowerCase());
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_"];
let enableCopy = false;

console.log(enableCopy);

//Event Listeners

label.addEventListener("click", resetPassLength);
passLength.addEventListener("click", resetPassLength);

btnGenerate.addEventListener("click", () => {
  passCopy.forEach((pass) => {
    pass.textContent = "Copy";
  });
  if (passLength.value < 6 || passLength.value > 15) {
    passField.classList.add("hide");
    errorField.classList.remove("hide");
  } else {
    passField.classList.remove("hide");
    errorField.classList.add("hide");
    passAreas.forEach((passArea) => {
      passArea.textContent = randomPassword();
    });
    enableCopy = true;
  }
  copyPass();
});

//Functions

function resetPassLength() {
  passLength.value = "";
}

function randomPassword() {
  let randPass = "";
  for (let i = 0; i < passLength.value; i++) {
    const randNum = Math.floor(Math.random() * 4);
    switch (randNum) {
      case 0:
        randPass += `${
          upperCase[Math.floor(Math.random() * upperCase.length)]
        }`;
        break;
      case 1:
        randPass += `${
          lowerCase[Math.floor(Math.random() * lowerCase.length)]
        }`;
        break;
      case 2:
        randPass += `${numbers[Math.floor(Math.random() * numbers.length)]}`;
        break;
      case 3:
        randPass += `${symbols[Math.floor(Math.random() * symbols.length)]}`;
        break;
      default:
        break;
    }
  }
  return randPass;
}

function copyPass() {
  if (enableCopy) {
    passCopy.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        navigator.clipboard.writeText(passAreas[index].textContent);
        passCopy.forEach((pass) => {
          pass.textContent = "Copy";
        });
        btn.textContent = "Copied!";
      });
    });
  }
}
