// Function to add a task to the list
function todoApplication() {
	// Retrieve the value from the input field and trim any extra spaces
	const inputTodoTaskValue = document.querySelector("#inputTodoTask").value.trim();
	// Get the list element where tasks will be appended
	const todoTaskList = document.querySelector("#todoTaskList");

	// Check if the input field is empty and alert the user if so
	if (inputTodoTaskValue === "") {
		alert("Please enter a task!");
		return;
	}

	// Clear the input field after retrieving the value
	document.querySelector("#inputTodoTask").value = "";

	// Create a new list item element for the task
	const todoListItem = document.createElement("li");
	todoListItem.className = "listItem";

	// Create a paragraph element to display the task text
	const displayTodoTask = document.createElement("p");
	displayTodoTask.textContent = inputTodoTaskValue;
	// Append the paragraph to the list item
	todoListItem.appendChild(displayTodoTask);

	// Create and configure the finished button
	const finishedButton = document.createElement("button");
	finishedButton.textContent = "Finished";
	finishedButton.classList.add("finishedButton");
	finishedButton.classList.add("todoButton");
	// Toggle the 'finished' class on the task text when clicked
	finishedButton.addEventListener("click", () => {
		displayTodoTask.classList.toggle("finished");
	});
	// Append the finished button to the list item
	todoListItem.appendChild(finishedButton);

	// Create and configure the delete button
	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.classList.add("deleteButton", "todoButton");
	// Remove the list item if the task is finished; otherwise, alert the user
	deleteButton.addEventListener("click", () => {
		if (displayTodoTask.classList.contains("finished")) {
			todoListItem.remove();
		} else {
			alert("Can't remove task before it's finished");
		}
	});
	// Append the delete button to the list item
	todoListItem.appendChild(deleteButton);

	// Append the new list item (with buttons) to the task list
	todoTaskList.appendChild(todoListItem);
}

// Set up event listeners for adding tasks
const addTodoTaskButton = document.querySelector("#addTodoTaskButton");

// Add event listener to the button to trigger task addition
addTodoTaskButton.addEventListener("click", todoApplication);
// Add event listener to the document to allow task addition using the Enter key
document.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		todoApplication();
	}
});
