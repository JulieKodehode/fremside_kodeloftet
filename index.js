const div = document.getElementById("div");
const button = document.getElementById("button");

button.onclick = () => {
	div.classList.toggle("colorChange");
	// console.log("Clicked?")
};

//
//
//

let navBar = document.getElementById("navBar");
let burgerButton = document.getElementById("burgerButton");

burgerButton.addEventListener("click", () => {
	navBar.classList.toggle("navHamburger");
	// console.log("Clicked?");
});

//
//
//

let sunAndMoon = document.getElementById("sunAndMoon");
let body = document.getElementById("body");

sunAndMoon.addEventListener("click", () => {
	sunAndMoon.classList.toggle("moon");
	console.log("Clicked?");
});

body.addEventListener("click", () => {
	body.classList.toggle("dark");
	console.log("Clicked?");
});
