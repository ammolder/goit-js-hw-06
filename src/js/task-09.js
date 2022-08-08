function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

btnChangeColor.addEventListener("click", onChangeColorBtn);

function onChangeColorBtn() {
  // spanRef.textContent = bodyRef.style.backgroundColor;
  // bodyRef.style.backgroundColor = getRandomHexColor();
  spanRef.textContent = bodyRef.style.background = getRandomHexColor();
}
