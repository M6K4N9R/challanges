console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

let count = 0;

function addMessage() {
  const newToastMessage = document.createElement("li");
  newToastMessage.textContent = "...and I'am a new Happy Toast Message!";
  newToastMessage.classList.add("toast-container__message");
  toastContainer.append(newToastMessage);
}

// const newToastMessageLast = document.createElement("li");
// newToastMessageLast.textContent = "I am the last one, folk. It's over!";
// newToastMessageLast.classList.add("toast-container__message");

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  addMessage();
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
});

console.log(newToastMessage.textContent);
