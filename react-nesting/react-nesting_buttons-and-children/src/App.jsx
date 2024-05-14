import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Click Me Once</Button>
      <Button>Or Click Me Twice</Button>
      <Button>Anyway</Button>
      <Button>I am Not A Dice</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
