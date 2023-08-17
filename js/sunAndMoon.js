let sunAndMoon = document.getElementById("sunAndMoon");
let body = document.getElementById("body");

sunAndMoon.addEventListener("click", () => {
	sunAndMoon.classList.toggle("moon");
	body.classList.toggle("dark");
	// console.log("clicked?")
});
