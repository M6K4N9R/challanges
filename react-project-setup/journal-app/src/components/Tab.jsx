export default function Tab({ text, counter, className }) {
  return (
    <div className={className}>
      <h3>{text}</h3>
      <p className="number-of-entries">
        <span>{counter}</span>
      </p>
    </div>
  );
}
