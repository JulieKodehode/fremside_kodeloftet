function unitConverterApplication() {
	// Retrieve and parse the input value from the input field
	const unitInput = parseFloat(document.querySelector("#unitInput").value);

	// Retrieve option values from the select field
	const fromUnitValue = document.querySelector("#fromUnitValue").value;
	const toUnitValue = document.querySelector("#toUnitValue").value;

	// Creating a empty variable.
	let result;

	// Perform conversion based on selected units
	if (fromUnitValue === "MM" && toUnitValue === "CM") {
		result = unitInput / 10;
	} else if (fromUnitValue === "MM" && toUnitValue === "M") {
		result = unitInput / 1000;
	} else if (fromUnitValue === "MM" && toUnitValue === "KM") {
		result = unitInput / 1000000;
	} else if (fromUnitValue === "CM" && toUnitValue === "MM") {
		result = unitInput * 10;
	} else if (fromUnitValue === "CM" && toUnitValue === "M") {
		result = unitInput / 100;
	} else if (fromUnitValue === "CM" && toUnitValue === "KM") {
		result = unitInput / 100000;
	} else if (fromUnitValue === "M" && toUnitValue === "MM") {
		result = unitInput * 1000;
	} else if (fromUnitValue === "M" && toUnitValue === "CM") {
		result = unitInput * 100;
	} else if (fromUnitValue === "M" && toUnitValue === "KM") {
		result = unitInput / 1000;
	} else if (fromUnitValue === "KM" && toUnitValue === "MM") {
		result = unitInput * 1000000;
	} else if (fromUnitValue === "KM" && toUnitValue === "CM") {
		result = unitInput * 100000;
	} else if (fromUnitValue === "KM" && toUnitValue === "M") {
		result = unitInput * 1000;
	} else {
		if (fromUnitValue === toUnitValue) {
			alert("Select different units");
			return;
		}
	}
	// Set the result to be showed with unit value on page
	displayUnitResult.textContent = `${result} ${toUnitValue}`;
}

// Event Listener: Trigger the conversion function when the button is clicked
const convertUnitButton = document.querySelector("#convertUnitButton");
convertUnitButton.addEventListener("click", unitConverterApplication);
