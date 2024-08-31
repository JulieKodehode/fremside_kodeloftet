// Function to fetch and display a random cat fact using async/await
async function fetchCatFact() {
	// Use try/catch to handle potential errors during the async operation
	try {
		// Make a GET request to the Cat Facts API
		const response = await fetch("https://catfact.ninja/fact");
		
		// Parse the JSON data from the response
		const data = await response.json();
		
		// Display the cat fact on the webpage
		const catFact = document.querySelector("#catFact");
		catFact.textContent = data.fact;
	} catch (error) {
		console.error("Error:", error);
	}
}

// Call the fetchCatFact function when the button is clicked
const factButton = document.querySelector("#factButton");
factButton.addEventListener("click", fetchCatFact);