// First grab all DOMS
const startButton = document.querySelector(".start-button");
const readyToPlay = document.querySelector(".ready-to-play");
const score = document.getElementById("score");
const highestScore = document.getElementById("highest-score");
const playNewGame = document.getElementById("play-new-game");
const resetGame = document.getElementById("reset-game");

// Grab all DOM color sequence change
const greenColor = documnent.querySelector(".top-left-panel-green");
const yellowColor = document.querySelector(".top-right-panel-yellow");
const redColor = document.querySelector(".bottom-left-panel-red");
const blueColor = document.querySelector(".bottom-right-panel-blue");

// When user clicks on start the game the sequence of the game should start
// if the first random color appear, play should begin following the pattern
// if player successfully follows pattern the score increases
// Understand my problem: I want to be ablw to have the Simon game be able to flash the colors, and to follow a sequence, and also for the player to be able follow the sequence.
const simonColor = ["green", "red", "yellow", "blue"];
let gameStart = false;
let simonPattern = [];
let userInputPatter = [];
let scoreBoard = 0;

function simonSequence() {
  const randomColor = Math.floor(Math.random() * simonColor.length);
  simonPattern.push(randomColor);
}

function flshColor() {
  
}
