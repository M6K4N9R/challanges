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
  return (
    <>
      <EntryForm />
      <EntriesSection />
    </>
  );
}

function EntryForm() {
  return (
    <>
      <h2>New Entry</h2>
      <form>
        <label for="input-title">Motto</label>
        <input type="text" id="input-title" name="moto" required />
        <label for="input-notes">Notes</label>
        <textarea id="input-notes" name="notes" rows="10" required></textarea>
        <Button />
      </form>
    </>
  );
}

function EntriesSection() {
  return (
    <>
      <Tabs />
      <EntriesList />
    </>
  );
}

function Tabs() {
  return (
    <section className="tabs-section">
      <div className="tabs tab--one">
        <h3>All Entries</h3>
        <p className="number-of-entries">
          <span>3</span>
        </p>
      </div>
      <div className="tabs tab--two">
        <h3>Favorites</h3>
        <p className="number-of-entries">
          <span>1</span>
        </p>
      </div>
    </section>
  );
}

function EntriesList() {
  return (
    <section className="entries-section">
      <acticle className="entries --entry-one">
        <div className="date">Feb 27 2024</div>
        <div className="acticle-info">
          <h3 className="entries--title">"That's Life in the city"</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FF4A11"
              stroke="#FF4A11"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <p className="article">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, quos
          corporis quo vero delectus ratione, libero quam voluptate magni
          obcaecati natus architecto nulla veritatis! Commodi placeat quaerat
          enim aliquid velit?
        </p>
      </acticle>
    </section>
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
