const circle = document.querySelector("#circle");
const startButton = document.querySelector("#startButton");
const pauseButton = document.querySelector("#pauseButton");
const resetButton = document.querySelector("#resetButton");

// Start the animation
startButton.addEventListener("click", () => {
  circle.style.animationPlayState = "running";
});

// Pause the animation
pauseButton.addEventListener("click", () => {
  circle.style.animationPlayState = "paused";
});

// Reset the animation
resetButton.addEventListener("click", () => {
  circle.style.animation = "none";
  void circle.offsetWidth;

  // Restart the animation
  circle.style.animation = "bounce 2s infinite ease-in-out";
  circle.style.animationPlayState = "paused";
});
