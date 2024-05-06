import "./App.css";

export default function App() {
  return (
    <h1>
      <Button text="Click Me" disabled={false} color={"#DBABBE"} />
    </h1>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: "#797394",
        padding: "5px 15px",
        fontSize: "21px",
        borderRadius: "9px",
      }}
      onClick={() => alert("Ah! Don't touch me.")}
    >
      {text} {disabled}
    </button>
  );
}
