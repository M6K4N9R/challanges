// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm.jsx";
import EntriesSection from "./components/EntriesSection.jsx";
// import { AddFavorite } from "../lib/data.js";
import { uid } from "uid";
import { initialEntries } from "../lib/data.js";
// import useLocalStorageState from "use-local-storage-state";

function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Journal</h1>
    </header>
  );
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
  const [entries, setEntries] = useState(initialEntries);
  const [filter, setFilter] = useState("all");

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const completeNewEntry = { ...newEntry, date: date, id: uid() };
    setEntries([completeNewEntry, ...entries]);
  }

  function countEntries() {
    const [countEntries, setCountEntries] = useState(0);

    function handleEntriesIncrement() {
      setCountEntries((c) => c + 1);
    }

    function handleEntiresDecrement() {
      setCountEntries((c) => c - 1);
    }
  }

  function handleShowFavoriteEntries() {
    setFilter("favorites");
  }

  function handleShowAllEntries() {
    setFilter("all");
  }
  return (
    <>
      <Header />
      <EntryForm onAddEntry={handleAddEntry} />
      <EntriesSection
        entries={entries}
        onShowAllEntries={handleShowAllEntries}
        onShowFavoriteEntries={handleShowFavoriteEntries}
      />
      <Footer />
    </>
  );
}

export default App;
