const startButton = document.getElementById("start-button");
const score = document.getElementById("score");
const colorBtn = document.querySelectorAll(".btn")
const gameReset = document.getElementById("reset-game");
const simonColors = ["red", "green", "yellow", "blue"];
const update = document.getElementById("update");
let isGameStart = false;
let simonPattern = [];
let userInputPattern = [];
let scoreLevel = 0;

startButton.addEventListener("click", () => {
  if(!isGameStart) {
    startGame()
  }
})
// function
function startGame() {
  isGameStart = true
  userInputPattern = [];
  simonPattern.push(randomColor());
  simonSequence();
}

function randomColor() {
  // this should get the random colors
  return simonColors[Math.floor(Math.random() * simonColors.length)];
}


function highlightTheColor(colorId) {
  // colors should flash
  let element = document.getElementById(colorId);
  element.style.opacity = 1;
  setTimeout(() => {
    element.style.opacity = 0.5;
  }, 300)
}

function simonSequence() {
  // have the sequence show to the player
  let i = 0;
  let intervalSet = setInterval(() => {
    // highlight of the color allows for the colors to flash
    highlightTheColor(simonPattern[i]);
    i++;
    if(i >= simonPattern.length) {
      clearInterval(intervalSet);
    }
  }, 600);
}

function resetGame() {
  isGameStart = false;
  simonPattern = [];
  userInputPattern = [];
  scoreLevel = 0;
  score.textContent = scoreLevel;
}

function userInput(color) {
  // push the color isnide the users pattern input
 userInputPattern.push(color);

 if(userInputPattern.length !== simonPattern.length) {
  return;
 }
//  if the plasyer input is equal to the computers inpute the score should increase, and display the score
 if(JSON.stringify(userInputPattern) === JSON.stringify(simonPattern)) {
  scoreLevel++
  score.textContent = scoreLevel
  startGame();
 } else {
  update.textContent = "Please try again !"
  resetGame()
 }
}

colorBtn.forEach(btn => {
  console.log(btn)
  btn.addEventListener("click", () => {
    const color = btn.id;
    userInput(color);
  })
})

gameReset.addEventListener("click", () => {
  isGameStart = false;
  startGame()
})




