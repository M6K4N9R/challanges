console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const formInput = document.getElementById("first-input");
const submit = document.querySelector('[data-js="button-uppercase"]');

submit.addEventListener("click", (event) => {
  event.preventDefault();
  formInput.value = formInput.value.toUpperCase();
  console.log(formInput.value);
});
