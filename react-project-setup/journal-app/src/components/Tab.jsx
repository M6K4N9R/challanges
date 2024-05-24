export default function Tab({ text, counter, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      <h3>{text}</h3>
      <p className="number-of-entries">
        <span>{counter}</span>
      </p>
    </button>
  );
}
