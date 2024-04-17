console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');
const newToastMessage = document.createElement('li');
newToastMessage.textContent = "...and I am a next Happy Toast Message"

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});

console.log()
