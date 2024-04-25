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

// function clearMessages() {
//   toastContainer.remove(toastContainer.children);
// }

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  addMessage();
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});

console.log(newToastMessage.textContent);
