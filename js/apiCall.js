// Function to fetch and display a random cat fact
function fetchCatFact() {
	// Make a GET request to the Cat Facts API
	fetch("https://catfact.ninja/fact")
		.then((response) => response.json())
		.then((data) => {
			// Display the cat fact on the webpage
			const catFact = document.querySelector("#catFact");
			catFact.textContent = data.fact;
		})
		.catch((error) => console.error("Error:", error));
}

// Call the fetchCatFact function when the page loads
const factButton = document.querySelector("#factButton");
factButton.addEventListener("click", fetchCatFact);
