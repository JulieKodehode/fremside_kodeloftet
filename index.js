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
	body.classList.toggle("dark");
	// console.log("clicked?")
});
