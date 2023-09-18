// First grab all DOMS
const startButton = document.getElementById("start-button");
const readyToPlay = document.querySelector(".ready-to-play");
const score = document.getElementById("score");
const playNewGame = document.getElementById("play-new-game");
const resetGame = document.getElementById("reset-game");
const colorButton = document.querySelector(".colorButton");

// Grab all DOM color sequence change
const greenColor = document.querySelector(".top-left-panel-green");
const yellowColor = document.querySelector(".top-right-panel-yellow");
const redColor = document.querySelector(".bottom-left-panel-red");
const blueColor = document.querySelector(".bottom-right-panel-blue");

// Understand => Implementing the core Simon Game: We should be able to have the game reperesent a sequence of colors to the player, and for the player to follow the pattern and input the pattern in order to gain points and increase difficulty
// Plan: have list created of colors that we will grab for the simon game between the colors red, green, blue, and yellow
// when we click to start the game. The sequence takes place immediately for the user to notice.
// player should follow the pattern of the game, if player fails to follow the pattern they lose the game, or else if they are successful in memorizing the pattern
// play gains a point each time and the game gets more difficult

const simonColors = [greenColor, yellowColor, redColor, blueColor];
let simonPattern = [];
let userInputPattern = [];
let gameStart = false;
let scoreLevel = 0;


// creating a sequence of colors
function simonSequence() {
  // with MathRandom we generate a sequence of color
  const randomColor = Math.floor(Math.random() * simonColors.length);
  // we will use the simon partern array to take in the sequence of colors by pushing it in the array.
  simonPattern.push(randomColor);
  console.log(simonPattern);
  playSimonSequence()
}

// function to play the sequence of the game
function playSimonSequence() {
  // declare variable that is equal to 0
  let i = 0;
  // set up an interval
  const intervalSet = setInterval(() => {
    flashColor(simonPattern[i]);
    i++
    // we should check if the i is equal or greater than simonpattern we need to clear the interval
    if(i >= simonPattern.length) {
      clearInterval(intervalSet);
      // Allow the users input
      userInput();
    }
  }, 1000)
}
// Will declare a flash card 
function flashColor(colorButton) {
  // toggle of the css class of active which allows the colors to change
  colorButton.classList.add("active");
  setTimeout(() => {
    colorButton.classList.remove("active");
  }, 2000)
}


function userInput() {
  userInputPattern = []
}

// Function to start a new game
function startGame() {
  // Initialize game variables(the score, paterns)
  console.log("Click me")
  simonPattern = [];
  userInputPattern = [];
  gameStart = true;
  // Start the Simon sequence
  simonSequence()
  // display the initial pattern to the user
  playSimonSequence()
}

// function to handle user input when clicking color panels
function handleColorClicked(color) {
  // Add the clicked color to userInputPattern
  userInputPattern.push(color);
  // Check if userInputPattern matches simonPattern
  if(userInputPattern.length === simonPattern.length) {
    score.textContent = scoreLevel;
  } else {
    gameOver()
  }
  // If it matches, continue the game or increase the score
  // If it doesn't match, end the game
}

// Event Listeners for buttons
startButton.addEventListener("click", startGame);
greenColor.addEventListener("click", () => {
  console.log("I am green");
  if (gameStart) {
    handleColorClicked("green"); // Pass the color as an argument
  }
});

yellowColor.addEventListener("click", () => {
  console.log("I am yellow")
  if (gameStart) {
    handleColorClicked("yellow"); // Pass the color as an argument
  }
});

redColor.addEventListener("click", () => {
  console.log("I am red")
  if (gameStart) {
    handleColorClicked("red"); // Pass the color as an argument
  }
});

blueColor.addEventListener("click", () => {
  console.log("I am blue")
  if (gameStart) {
    handleColorClicked("blue"); // Pass the color as an argument
  }
});

// function to display pattenr
function displayPattern(pattenr) {
  // show pattern to the user

}

function gameWon() {
// Handle winning the game by increasing the and showing the message
}

function gameOver() {
  
}



