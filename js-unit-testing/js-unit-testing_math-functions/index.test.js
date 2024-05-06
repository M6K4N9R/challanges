import { add } from "./index.js";
import { subtract } from "./index.js";
import { multiply } from "./index.js";
import { divide } from "./index.js";

// Add function
test("adds the numbers 1, 2 correctly", () => {
  const result = add(3, 5);
  expect(result).toBe(8);
});
test("adds negative numbers 1, 2 correctly", () => {
  const result = add(3, -5);
  expect(result).toBeLessThan(0);
});
test("adds not full numbers 1, 2 correctly", () => {
  const result = add(3.3, 5.6);
  expect(result).toBeCloseTo(8.9);
});

// Substract function

test("subtracts the numbers correctly", () => {
  const result = subtract(6, 4);
  expect(result).toBe(2);
});
test("subtracts the numbers correctly when one of them is negative", () => {
  const result = subtract(-3, 6);
  expect(result).toBeLessThan(0);
});

//Multiply function

test("multiply the numbers correctly", () => {
  const result = multiply(3, 5);
  expect(result).toBe(15);
});
test("multiply the numbers correctly if only the first value is negative", () => {
  const result = multiply(-3, 5);
  expect(result).toBe(-15);
});
test("multiply the numbers correctly if only the second value is negative", () => {
  const result = multiply(3, -8);
  expect(result).toBe(-24);
});
test("multiply the numbers correctly if both values are negative", () => {
  const result = multiply(-3, -8);
  expect(result).toBe(24);
});

//Divide function

test("divide the numbers correctly", () => {
  const result = divide(3, 0);
  expect(result).toBe("You should not do this!");
});

test("divide the numbers correctly", () => {
  const result = divide(9, 3);
  expect(result).toBe(3);
});
