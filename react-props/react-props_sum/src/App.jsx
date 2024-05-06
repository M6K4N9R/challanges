import "./App.css";

export default function App() {
  return (
    <section className="sum-function">
      <Sum valueA={23} valueB={45} />
    </section>
  );
}

function Sum({ valueA, valueB }) {
  let outcome = valueA + valueB;
  console.log(outcome);
  return (
    <h1>
      {valueA} + {valueB} = outcome;
    </h1>
  );
}
