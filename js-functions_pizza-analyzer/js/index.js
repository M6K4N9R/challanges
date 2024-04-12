console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let Pizza1InputValue;
let Pizza2InputValue;
let pizzaGain;

pizzaInput1.addEventListener("input", (event) => {
  Pizza1InputValue = event.target.value;
  console.log(Pizza1InputValue);
  calculatePizzaGain(Pizza1InputValue, Pizza2InputValue);
});

pizzaInput2.addEventListener("input", (event) => {
  Pizza2InputValue = event.target.value;
  console.log(Pizza2InputValue);
  calculatePizzaGain(Pizza1InputValue, Pizza2InputValue);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameterPizza1, diameterPizza2) {
  let area1 = Math.PI * Math.pow(Pizza1InputValue / 2, 2);
  let area2 = Math.PI * Math.pow(Pizza2InputValue / 2, 2);
  console.log("Area 1:", area1);
  console.log("Area 2:", area2);
  pizzaGain = ((area2 - area1) / area1) * 100;
  console.log("Pizza gain is:", pizzaGain);
}
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
