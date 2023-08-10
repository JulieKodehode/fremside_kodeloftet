const div = document.getElementById("div");
const button = document.getElementById("button");

button.onclick = () => {
	div.classList.toggle("colorChange");
};

let navBar = document.getElementById("navBar");
let burgerButton = document.getElementById("burgerButton");

burgerButton.addEventListener("click", () => {
	navBar.classList.toggle("navHamburger");
	console.log("Clicked?");
});
