import "./App.css";

export default function App() {
  return (
    <h1>
      <Smiley emoji={""} isHappy={false} />
    </h1>
  );
}

function Smiley({ emoji, isHappy }) {
  if (isHappy) {
    emoji = "😁";
  } else {
    emoji = "😟";
  }
  return <div>{emoji}</div>;
}
