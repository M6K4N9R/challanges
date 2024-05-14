import "./Card.css";

export default function Card({ name, color }) {
  return (
    <p className="card" style={{ border: `3px solid ${color}` }}>
      {name}
    </p>
  );
}
