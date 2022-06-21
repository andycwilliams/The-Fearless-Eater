// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// -------------------------------- Forms --------------------------------

// -------------------------------- Password Generator --------------------------------

const finalPassword = document.querySelector(".passwordResult");
const generateEl = document.querySelector(".generatePassword");
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

// -------------------------------- Logged In --------------------------------

document
  .querySelector(".loggedinBtn")
  .addEventListener("click", function (event) {
    // console.log("Click!");
    const element = document.querySelector(".loggedIn");
    const state = element.getAttribute("data-state");

    if (state == "hidden") {
      console.log("Data will now be VISIBLE");
      element.dataset.state = "visible";
    } else {
      console.log("Data will now be HIDDEN");
      // element.setAttribute("data-state", "hidden");
      element.dataset.state = "hidden";
    }
  });

document
  .querySelector(".testContainer")
  .addEventListener("click", function (event) {
    const element = event.target;

    if (element.matches(".box")) {
      const state = element.getAttribute("data-state");

      // Use an if statement to conditionally render the number on the card
      if (state === "hidden") {
        // If the card is clicked while the state is "hidden", we set .textContent to the number
        element.textContent = element.dataset.number;
        // Using the dataset property, we change the state to visible because the user can now see the number
        element.dataset.state = "visible";
      } else {
        // 'Hide' the number by setting .textContent to an empty string
        element.textContent = "";
        // Use .setAttribute() method
        element.setAttribute("data-state", "hidden");
      }
    }
  });
