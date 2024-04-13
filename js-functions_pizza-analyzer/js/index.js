console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

let pizzaSize1 = 0;
let pizzaSize2 = 0;
let area1;
let area2;
let pizzaGain;

pizzaInput1.addEventListener("input", (event) => {
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", (event) => {
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  area1 = Math.PI * Math.pow(pizzaSize1 / 2, 2);
  area2 = Math.PI * Math.pow(pizzaSize2 / 2, 2);
  pizzaGain = ((area2 - area1) / area1) * 100;
  output.textContent = Math.round(pizzaGain);
}
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
