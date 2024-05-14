import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(0);

  const handleAddingPerson = () => {
    setPeople(people + 1);
  };
  const handleSubstractingPerson = () => {
    setPeople(people - 1);
  };
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onhandleAddingPerson={handleAddingPerson}
        onhandleSubstractingPerson={handleSubstractingPerson}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
