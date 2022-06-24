// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// --------------------------------  --------------------------------

// -------------------------------- Display/Hide --------------------------------

document.querySelector(".passwordHelper").style.display === "none";

document
  .querySelector(".passwordHelperBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Test");
    const displayHide = document.querySelector(".passwordHelper");
    if (displayHide.style.display === "none") {
      displayHide.style.display = "block";
    } else {
      displayHide.style.display = "none";
    }
  });

// -------------------------------- Password Generator --------------------------------

const finalPassword = document.querySelector(".passwordResult");
const generateEl = document.querySelector(".generatePassword");

// const charTypeArr = {
//   uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
//   lowercase: ["abcdefghijklmnopqrstuvwxyz"],
//   numbers: ["0123456789"],
//   specialCharacters: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
// };

document
  .querySelector(".generatePassword")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const charTypeArr = {
      uppercase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
      lowercase: ["abcdefghijklmnopqrstuvwxyz"],
      numbers: ["0123456789"],
      specialCharacters: ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
    };

    const generated = charTypeArr.join("");

    let result = "";
    for (i = 0; i < 20; i++) {
      result += generated.charAt(Math.floor(Math.random() * 20));
    }

    document.getElementById("finalPasswordOutput").innerHTML = result;
  });

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

// document
//   .querySelector(".testContainer")
//   .addEventListener("click", function (event) {
//     const element = event.target;

//     if (element.matches(".box")) {
//       const state = element.getAttribute("data-state");

//       // Use an if statement to conditionally render the number on the card
//       if (state === "hidden") {
//         // If the card is clicked while the state is "hidden", we set .textContent to the number
//         element.textContent = element.dataset.number;
//         // Using the dataset property, we change the state to visible because the user can now see the number
//         element.dataset.state = "visible";
//       } else {
//         // 'Hide' the number by setting .textContent to an empty string
//         element.textContent = "";
//         // Use .setAttribute() method
//         element.setAttribute("data-state", "hidden");
//       }
//     }
//   });
