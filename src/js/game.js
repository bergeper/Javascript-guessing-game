// Might need to work on naming my variables abit more.
// Empty variable for the one that sets the number so it can be used in a later function
let userSet = 0;
// Made a variable for making the "victory-text"
const userResult = document.getElementById("card");

// The one that sets the number.
function userSetNumber() {
  userSet = Number(document.getElementById("setNumber").value);
  // If the user sets a number thats too high.
  if (userSet > 100) {
    alert("För högt, talet får inte vara högre än 100");
  }
  document.getElementById("setNumber").value = "";
}

// Button to activate function
let userSetSave = document.getElementById("btnSetNumber");
userSetSave.addEventListener("click", userSetNumber);

// The one that tries to guess the number
// User will be able to guess as many times as needed. Need to fix that in the future.
function guessingGame() {
  const userGuess = parseInt(document.getElementById("guessNumber").value);
  if (userSet > userGuess) {
    alert("Du gissa för lågt! Prova igen");
  }
  if (userSet < userGuess) {
    alert("Du gissa för högt! Prova igen");
  }
  if (userSet === userGuess) {
    userResult.innerHTML = "Du gissade rätt! Ladda om sidan för att spela igen";
  }
}

// Button to activate function
let userGuessSave = document.getElementById("btnGuessNumber");
userGuessSave.addEventListener("click", guessingGame);
