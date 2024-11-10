const display = document.querySelector('.display input[name="display"]');
// Get all buttons in the calculator
const buttons = document.querySelectorAll('.claculator form input');

// This function decides what to do based on the button clicked
function updateDisplay(buttonValue) {
  if (buttonValue === "AC") {
    clearDisplay(); // Clear display if "AC" is clicked
  } else if (buttonValue === "DE") {
    deleteLastCharacter(); // Delete last character if "DE" is clicked
  } else if (buttonValue === "=") {
    calculateResult(); // Calculate and show result if "=" is clicked
  } else {
    appendToDisplay(buttonValue); // Add number/operator to display for other buttons
  }
}

// Function to clear everything from the display
function clearDisplay() {
  display.value = "";
}

// Function to delete the last character from the display
function deleteLastCharacter() {
  display.value = display.value.slice(0, -1); // Remove one character from the end
}

// Function to add numbers/operators to the display
function appendToDisplay(character) {
  display.value += character; // Add character to display value
}

// Function to calculate the result of the expression in the display
function calculateResult() {
  try {
    display.value = eval(display.value); // Evaluate the math expression in display
  } catch (error) {
    display.value = "Error"; // Show "Error" if something goes wrong
  }
}

// Go through each button and add an action when clicked
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonValue = button.value; // Get the value of the button clicked
    updateDisplay(buttonValue); // Call updateDisplay to handle the button click
  });
});
