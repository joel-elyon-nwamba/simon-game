// References to HTML elements
const startButton = document.getElementById("start-button");
const scoreDisplay = document.getElementById("score");
const colorButtons = document.querySelectorAll(".colorButton");

// Array of possible Simon colors
const simonColors = ["red", "green", "yellow", "blue"];

// Game state and patterns
let gameStart = false;
const simonPattern = [];
const userInputPattern = [];
let scoreLevel = 0;

// Function to start the game
function startGame() {
  gameStart = true; // Set game state to started
  scoreLevel = 0; // Reset score
  simonPattern.length = 0; // Clear Simon's pattern
  userInputPattern.length = 0; // Clear user's input pattern
  simonSequence(); // Start Simon's sequence
}

// Function to generate Simon's sequence
function simonSequence() {
  if (gameStart) {
    const randomIndex = Math.floor(Math.random() * simonColors.length); // Get a random index
    const randomColor = simonColors[randomIndex]; // Get a random color from the array
    simonPattern.push(randomColor); // Add the random color to Simon's pattern
    displayPattern(); // Display the pattern to the user
  }
}

// Function to display Simon's sequence to the user
function displayPattern() {
  let index = 0;
  const interval = setInterval(() => {
    flashColor(simonPattern[index]); // Flash the color at the current index
    index++;
    if (index === simonPattern.length) {
      clearInterval(interval); // Stop the interval when all colors have been shown
    }
  }, 1000);
}

// Function to flash a color
function flashColor(color) {
  const colorDiv = document.getElementById(color);
  colorDiv.classList.add('flash'); // Add a flash effect
  setTimeout(() => {
    colorDiv.classList.remove('flash'); // Remove the flash effect after 500ms
  }, 500);
}

// Event listeners for each color button to capture user's input
colorButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (gameStart) {
      const userColor = e.target.id; // Get the color that the user clicked
      userInputPattern.push(userColor); // Add the color to the user's input pattern
      checkUserInput(); // Check if the user's input matches Simon's pattern
    }
  });
});

// Function to check the user's input against Simon's pattern
function checkUserInput() {
  if (userInputPattern[userInputPattern.length - 1] !== simonPattern[userInputPattern.length - 1]) {
    gameStart = false; // End the game if the user's input is wrong
    alert("Oops! Wrong pattern. Try again.");
    startGame(); // Restart the game
  } else if (userInputPattern.length === simonPattern.length) {
    scoreLevel++; // Increase the score if the user got the sequence right
    scoreDisplay.textContent = "Score: " + scoreLevel; // Display the updated score
    userInputPattern.length = 0; // Clear the user's input pattern for the next round
    simonSequence(); // Generate a new sequence for Simon
  }
}

// Event listener for the start button
startButton.addEventListener("click", startGame);

// Event listener for the reset button
document.getElementById("reset-game").addEventListener("click", () => {
  gameStart = false; // End the game
  scoreDisplay.textContent = "Score: 0"; // Reset the score display
});