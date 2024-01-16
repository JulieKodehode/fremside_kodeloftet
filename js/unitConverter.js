// First we must declare our global-scope variables.
// If we declared them in the function, they wouldn't be usable anywhere but inside the function.

// Global Variables
const fromUnit = document.getElementById("from");
const toUnit = document.getElementById("to");
let button = document.getElementById("convertBtn");

function convert() {
	// Inside the function, we declare the variables which need to be updated each time the function runs.
	// If these were outside the function, their values would never update.
	const inputValue = parseFloat(document.getElementById("input").value);
	const fromUnitValue = document.getElementById("from").value;
	const toUnitValue = document.getElementById("to").value;
	let result;

	if (fromUnitValue === "meters" && toUnitValue === "kilometers") {
		result = inputValue / 1000;
	} else if (fromUnitValue === "meters" && toUnitValue === "miles") {
		result = inputValue * 0.000621371;
	} else if (fromUnitValue === "kilometers" && toUnitValue === "meters") {
		result = inputValue * 1000;
	} else if (fromUnitValue === "kilometers" && toUnitValue === "miles") {
		result = inputValue * 0.621371;
	} else if (fromUnitValue === "miles" && toUnitValue === "meters") {
		result = inputValue * 1609.34;
	} else if (fromUnitValue === "miles" && toUnitValue === "kilometers") {
		result = inputValue * 1.60934;
	} else {
		result = "There must be an error";
	}

	// Showes error because result is a string and not a number
	document.getElementById("result").textContent = `${result.toFixed(2)} ${toUnitValue}`;
}

// Targeting our "convert" button and adding an event listener so it runs the convert function(above) when we click it.
button.addEventListener("click", convert);

// Targeting the from & to inputs and adding an event listener which will listen for a change (when we change the dropdowns from miles to meters etc). When a change is detected, the sameUnits function will run.
fromUnit.addEventListener("change", sameUnits);
toUnit.addEventListener("change", sameUnits);

// This sameUnits function checks if our 'from' & 'to' selections are the same, if so then the button is set to disabled. If they are not the same, the button is enabled.
function sameUnits() {
	if (fromUnit.value === toUnit.value) {
		button.disabled = true;
	} else {
		button.disabled = false;
	}
}
