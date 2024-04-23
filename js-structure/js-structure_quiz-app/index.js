// Store the cards in a global state
import { Header } from "./components/Header/Header.js";
import { handleFormSubmit } from "./components/Form/Form.js";
import { App } from "./components/App/App.js";
import { CardList } from "./components/CardList/CardList.js";
import { Card } from "./components/Card/Card.js";


// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
