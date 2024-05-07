import "./App.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article class="article">
      <h2 className="article__title">Yo, What's UP!</h2>
      <label htmlFor="question">What is your problem?</label>
      <input
        type="textarea"
        name="user-input"
        id="question"
        cols="30"
        rows="10"
      ></input>
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/Problem"
        target="_blank"
      >
        Find your answer
      </a>
    </article>
  );
}
