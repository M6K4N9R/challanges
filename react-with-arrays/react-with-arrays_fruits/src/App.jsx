import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    { id: 100, name: "🍌 Banana", texture: "soft", color: "yellow" },
    { id: 101, name: "🍎 Green Apple", texture: "crunchy", color: "green" },
    { id: 102, name: "🍑 Peach", texture: "juicy", color: "orange" },
    { id: 103, name: "🍉 Watermelon", texture: "watery", color: "red" },
    { id: 104, name: "🍇 Grapes", texture: "great", color: "purple" },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
