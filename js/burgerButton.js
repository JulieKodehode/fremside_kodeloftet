// Get the navigation bar element by its ID
const navBar = document.querySelector("#navBar");

// Get the burger button element by its ID
const burgerButton = document.querySelector("#burgerButton");

// Add a click event listener to the burger button
burgerButton.addEventListener("click", () => {
	navBar.classList.toggle("navHamburger");

});