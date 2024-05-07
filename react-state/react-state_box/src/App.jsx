import { useState } from "react";
import "./App.css";

export default function App() {
  const [active, setActive] = useState(false);

  function handleClick() {
    setActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}
