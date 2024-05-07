import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Journal</h1>
    </header>
  );
}

function MainSection() {
  return <EntryForm />;
}

function EntryForm() {
  return (
    <>
      <h2>New Entry</h2>
      <form>
        <label for="input-title">Motto</label>
        <input type="text" id="input-title" name="moto" required />
        <label for="input-notes">Notes</label>
        <textarea
          id="input-notes"
          name="notes"
          rows="5"
          cols="40"
          required
        ></textarea>
        <Button />
      </form>
    </>
  );
}

function Button() {
  return <input type="submit" className="form-button" value="Create" />;
}

function Footer() {
  return (
    <footer className="footer">
      <h3>Journal App - 2024</h3>
    </footer>
  );
}

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainSection />
      <Footer />
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;
