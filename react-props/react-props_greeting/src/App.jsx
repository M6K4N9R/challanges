import "./App.css";

export default function App() {
  return (
    <div>
      <Greeting text={"Hello "} name={"Andrii"} />
      <Greeting text={"Welcome "} name={"Teresa"} />
      <Greeting text={"Bienvenue "} name={"Coco"} />
    </div>
  );
}

function Greeting({ text, name }) {
  return (
    <h2>
      {text}
      {name}
    </h2>
  );
}
