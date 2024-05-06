import "./App.css";

export default function App() {
  return (
    <h1>
      <Smiley emoji={""} isHappy={true} />
    </h1>
  );
}

function Smiley(emoji, isHappy) {
  let emoji = null;
  if (isHappy) {
    emoji = <span>"&#128513"</span>;
  } else {
    emoji = <span>"&#128530"</span>;
  }
  return { emoji };
}
