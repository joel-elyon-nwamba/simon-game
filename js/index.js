const startButton = document.getElementById("start-button");
const score = document.getElementById("score");
const greenColor = document.getElementById("green");
const yellowColor = document.getElementById("yellow");
const redColor = document.getElementById("red");
const blueColor = document.getElementById("blue");
const colorButton = document.querySelectorAll(".coloButton");
const simonColors = ["red", "green", "yellow", "blue"];
let gameStart = false;
const simonPattern = [];
const userInputPattern = [];
let scoreLevel = 0;


function startGame() {
  gameStart = true;
  simonSequence()
}

function simonSequence() {
  // first we grab the idex
  if(gameStart) {
    const randomIndex = Math.floor(Math.random() * simonColors.length);
    // we grab the random color now
    const randomColor = simonColors[randomIndex];
   console.log(simonPattern.push(randomColor))
    // colors that flash
    let running = 0
    if(running > 0)return;
   for(let i = 0; i < simonPattern.length; i++) {

    running++
   setTimeout(() => {
    btn.style.backgroundColor = simonPattern[i%2];
    running--;
   }, 1000);
   }
  }
console.log(simonPattern);
}

startButton.addEventListener("click", () => {
  if(!gameStart) {
    startGame()
  }
});





