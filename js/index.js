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
  return simonPattern.push(randomColor);
}


// function to play the sequence of the game
// function playSimonSequence() {
//   let i = 0;
//   let intervalSet = setInterval(() => {
//     const colorSequence = simonPattern[i];
//     console.log(colorSequence);
//     console.log(simonColors[colorSequence].classList.add("active"));
//     setTimeout(() => {
//       console.log(simonColors[colorSequence].classList.remove("active"))
//     }, 100)
//     i++;
//     if(i >= simonPattern.length) {
//       clearInterval(intervalSet);
//       userInput();
//     }
//   }, 100);
//   console.log(intervalSet)
// }

function flash(panel) {
  return new Promise((resolve, reject) => {
    panel.className +=  " active";
    setTimeout(() => {
      panel.className = panel.className.replace(" active", " ");
      resolve();
    }, 1000)
  })
}

async function playSimonSequence() {
  for(const panel of simonColors) {
    await flash(panel);
  }
}

async function playSimonSequence() {
  for (const colorPanel of simonPattern) {
    await flash(colorPanel); // Flash the color
    // Wait for a short interval before moving to the next color
    await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the delay as needed
  }
  // You may want to add some delay at the end of the sequence before allowing user input
  await new Promise(resolve => setTimeout(resolve, 1000)); // Adjust the delay as needed
  // Now, you can enable user input or perform other actions as needed
  userInput();
}



// function to start game
function startGame() {
  gameStart = true;
  simonPattern = [];
  userInputPattern = [];
  simonSequence();
  score = 0;
}


function userInput() {
  userInputPattern = []
}

// Function to start a new game
function startGame() {
  // Initialize game variables(the score, paterns)
  simonPattern = [];
  userInputPattern = [];
  gameStart = true;
  // Start the Simon sequence
  simonSequence();
  scoreLevel = 0;
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
startButton.addEventListener("click", () => {
  if(!gameStart) {
    startGame();
  }
});
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




