import "./Card.css";

export default function Card({ name }) {
  const fruits = [
    { id: 100, name: "🍌 Banana", texture: "soft", color: "yellow" },
    { id: 101, name: "🍎 Green Apple", texture: "crunchy", color: "green" },
    { id: 102, name: "🍑 Peach", texture: "juicy", color: "orange" },
    { id: 103, name: "🍉 Watermelon", texture: "watery", color: "red" },
  ];
  return (
    <section>
      {fruits.map((fruit) => (
        <p key={fruit.id} className="card">
          {fruit.name}
        </p>
      ))}
    </section>
  );
}
