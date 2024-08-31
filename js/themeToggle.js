// Get the body button by its ID
const body = document.querySelector("#body");

// Get the theme toggle button by its ID
const themeToggle = document.querySelector("#themeToggle");

// Add a click event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
	themeToggle.classList.toggle("moon");
	body.classList.toggle("dark");
});
