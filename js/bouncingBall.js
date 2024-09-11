const bounceAnimationCircle = document.querySelector("#bounceAnimationCircle");
const bounceAnimationStartButton = document.querySelector("#bounceAnimationStartButton");
const bounceAnimationPauseButton = document.querySelector("#bounceAnimationPauseButton");
const bounceAnimationResetButton = document.querySelector("#bounceAnimationResetButton");

// Start the animation
bounceAnimationStartButton.addEventListener("click", () => {
  bounceAnimationCircle.style.animationPlayState = "running";
});

// Pause the animation
bounceAnimationPauseButton.addEventListener("click", () => {
  bounceAnimationCircle.style.animationPlayState = "paused";
});

// Reset the animation
bounceAnimationResetButton.addEventListener("click", () => {
  bounceAnimationCircle.style.animation = "none";
  void bounceAnimationCircle.offsetWidth;

  // Restart the animation
  bounceAnimationCircle.style.animation = "bounce 2s infinite ease-in-out";
  bounceAnimationCircle.style.animationPlayState = "paused";
});
