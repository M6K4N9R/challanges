import ColoredNumber from "./ColoredNumber";
import "./Counter.css";
import { useState } from "react";

export default function Counter() {
  const [colorValue, setColorValue] = useState(0);
  const incrementCounter = () => {
    console.log("Click");
    setColorValue(colorValue + 1);
  };
  const decrementCounter = () => {
    console.log("Click");
    setColorValue(colorValue - 1);
  };
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={colorValue} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={incrementCounter}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={decrementCounter}
        >
          -
        </button>
      </div>
    </div>
  );
}
