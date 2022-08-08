const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");
let counterValue = 0;

decrement.addEventListener("click", onDecrementValue);
increment.addEventListener("click", onIncrementValue);

function onDecrementValue(evt) {
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
}
function onIncrementValue(evt) {
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
}
