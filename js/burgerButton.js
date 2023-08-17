let navBar = document.getElementById("navBar");
let burgerButton = document.getElementById("burgerButton");

burgerButton.addEventListener("click", () => {
	navBar.classList.toggle("navHamburger");
	// console.log("Clicked?");
});
