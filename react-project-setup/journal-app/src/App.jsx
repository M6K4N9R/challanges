// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useState } from "react";
import "./App.css";
import EntryForm from "./components/EntryForm.jsx";
import EntriesSection from "./components/EntriesSection.jsx";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];

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

  function handleAddEntry(newEntry) {
    const newEntry = {
      moto: data.moto,
      notes: data.notes,
    };
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    newEntry = { ...newEntry, date: date };
  }

  return (
    <>
      <Header />
      <EntryForm />
      <EntriesSection entries={entries} />
      <Footer />
    </>
  );
}

export default App;
