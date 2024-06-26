console.clear();

const pixelValues = [
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#ffffff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
  ],
  [
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
  ],
  [
    "#ffffff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#8236ff",
    "#ffffff",
    "#8236ff",
    "#ffffff",
  ],
];

const canvas = document.querySelector('[data-js="canvas"]');

for (const pixselElement of pixelValues) {
  if (Array.isArray(pixselElement)) {
    for (const color of pixselElement) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.backgroundColor = `${color}`;
      canvas.append(pixel);
    }
  }
}
