const startButton = document.getElementById("start-button");

let gameStart = false;
function startGame() {
  gameStart = true;
}

startButton.addEventListener("click", () => {
  if(gameStart === true) {
    startGame()
  } else {
    return false;
  }
});





