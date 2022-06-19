// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// -------------------------------- Forms --------------------------------

// -------------------------------- Password Generator --------------------------------

const finalPassword = document.querySelector("#finalPassword");
const generateEl = document.querySelector("#generate");
let userArr = [];

const charTypeArr = {
  uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  lowercase: ["abcdefghijklmnopqrstuvwxyz"],
  numbers: ["0123456789"],
  specialCharacters: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
};

function generatePool() {
  const getCharCount = document.querySelector("#charQuantity").value;
  const userArr = [];
  if (document.getElementById("uppercaseCheck").checked) {
    userArr.push(charTypeArr.uppercase);
  }
  if (document.getElementById("lowercaseCheck").checked) {
    userArr.push(charTypeArr.lowercase);
  }
  if (document.getElementById("numbersCheck").checked) {
    userArr.push(charTypeArr.numbers);
  }
  if (document.getElementById("specialCharCheck").checked) {
    userArr.push(charTypeArr.specialCharacters);
  }

  const joinedUserArr = userArr.join("");
  const userArrLength = joinedUserArr.length;

  let result = "";
  for (i = 0; i < getCharCount; i++) {
    result += joinedUserArr.charAt(Math.floor(Math.random() * userArrLength));
  }

  document.getElementById("finalPassword").innerHTML = result;
}

// --------------------------------  --------------------------------
