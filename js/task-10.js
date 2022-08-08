function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");
const boxes = document.querySelector("#boxes");
let size = 30;
let index = 1;

createBtn.addEventListener("click", onCreateBtnClick);
destroyBtn.addEventListener("click", onDestroyBtnClick);

function onCreateBtnClick() {
  if (inputEl.value > 100) {
    return alert("Are you ok?");
  }
  createBoxes(inputEl.value);
}

function onDestroyBtnClick() {
  size = 30;
  boxes.innerHTML = "";
  inputEl.value = "";
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    index -= 1;

    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style="background-color: ${getRandomHexColor()}; width:${size}px; height:${size}px; position:absolute; z-index:${index}"></div>`
    );
  }
}
// Добвив positiot: absoltue, z-index для того щоб діви відображалися один на іншому. Так красивіше
