console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const switchToDark = document.querySelector('[data-js="dark-mode-button"]');
const switchToLight = document.querySelector('[data-js="light-mode-button"]');
const toggleButton = document.querySelector('[data-js="toggle-button"]');

switchToDark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

switchToLight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
