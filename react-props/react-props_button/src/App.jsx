import "./App.css";

export default function App() {
  function handleClick() {
    console.log("Ah! Don't touch me.");
  }
  return (
    <h1>
      <Button
        text="Click Me"
        disabled={false}
        color={"#DBABBE"}
        onClick={handleClick}
      />
    </h1>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        color: color,
        backgroundColor: "#797394",
        padding: "5px 15px",
        fontSize: "21px",
        borderRadius: "9px",
      }}
    >
      {text} {disabled}
    </button>
  );
}
