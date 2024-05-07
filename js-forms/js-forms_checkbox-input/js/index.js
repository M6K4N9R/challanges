console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMessage = document.createElement("div");
const submitButton = document.querySelector('button[type="submit"]');

successMessage.dataset.js = "success";
successMessage.className = "success";
successMessage.style.display = "none";

successMessage.textContent = "Complaint successfully submitted!";
form.insertBefore(successMessage, submitButton);

console.log(form);
hideTosError();

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function showSuccess() {
  successMessage.style.display = "block";
}

tosCheckbox.addEventListener("click", (event) => {
  const checkboxStatus = event.target.checked;
  console.log(checkboxStatus);
  checkboxStatus ? hideTosError() : showTosError();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v-
  if (tosCheckbox.checked !== true) {
    showTosError();
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  showSuccess();
  alert("Form submitted");
  event.target.reset();
});
