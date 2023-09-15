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
// Playing the simon sequence
// declare a variable called interval
let interval;
// declare another variable that
let index = 0;
function playSimonSequence() {
  // set timeout and interval
  // need to connect simonPattern in order for the sequence to take place
  if(index < simonPattern.length) {
    const colorSequence = simonPattern[index];
    const displayColor = simonColors[colorSequence];
    // display the color
    displayColor.style.backgroundColor = "yellow";

    setTimeout(() => {
      // should be no color
      displayColor.style.backgroundColor = " ";
      index++;
      // check if the index is equal to the simonPattern
      if(index === simonPattern.length) {
        clearInterval(interval)
      }
    }, 1000)
  }
}

interval = setInterval(playSimonSequence, 1000);
console.log(interval);
playSimonSequence();

// Function to start a new game
function startGame() {
  // Initialize game variables(the score, paterns)
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
  }
  // If it matches, continue the game or increase the score
  // If it doesn't match, end the game
}

// Event Listeners for buttons
// greenColor.addEventListener("click", )


// function to display pattenr
function displayPattern(pattenr) {
  // show pattern to the user

}

function gameWon() {
// Handle winning the game by increasing the and showing the message
}



