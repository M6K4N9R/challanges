console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');
let pizzaSize1;
let pizzaSize2;
let pizzaGain;

pizzaInput1.addEventListener("input", (event) => {
  pizzaSize1 = event.target.value;
  // console.log(pizzaSize1);
});

pizzaInput2.addEventListener("input", (event) => {
  pizzaSize2 = event.target.value;
  // console.log(pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameterPizza1, diameterPizza2) {
  let area1 = Math.PI * Math.pow(pizzaSize1 / 2, 2);
  let area2 = Math.PI * Math.pow(pizzaSize2 / 2, 2);
  pizzaGain = ((area2 - area1) / area1) * 100;
  let output = Math.round(pizzaGain);
  console.log("Pizza gain is:", output);
}
calculatePizzaGain(pizzaSize1, pizzaSize2);
// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
