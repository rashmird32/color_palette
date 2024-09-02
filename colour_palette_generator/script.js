const refreshButton = document.querySelector(".refresh-btn");
const container = document.querySelector(".container");

const maxPaletteBoxes = 24;

const generatePalette = () => {
  container.innerHTML = "";
  for (i = 0; i < maxPaletteBoxes; i++) {
    //generating random hex color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background-color:${randomHex}"></div>
        <span class="hexValue">${randomHex}</span>`;

    //adding click event to copy the color
    // color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hexValue");
  // Copying the hex value, updating the text to copied,
  // and changing text back to original hex value after 1 second
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copied";
      setTimeout(() => (colorElement.innerText = hexVal), 1000);
    })
    .catch(() => alert("Failed to copy the color code!")); // showing alert if color can't be copied
};

refreshButton.addEventListener("click", generatePalette);
