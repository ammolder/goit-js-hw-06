// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
const spanEl = document.querySelector("#value");
let counterValue = 0;
console.log(spanEl);

decrement.addEventListener("click", onDecrementValue);
increment.addEventListener("click", onIncrementValue);
// console.log(onDecrementValue());

function onDecrementValue(evt) {
  counterValue -= 1;
  document.querySelector("#value").innerHTML = counterValue;
}
function onIncrementValue(evt) {
  counterValue += 1;
  document.querySelector("#value").innerHTML = counterValue;
}

// const CounterPlugin = function ({
//   rootSelector,
//   initialValue = 0,
//   step = 1,
// } = {}) {
//   this._value = initialValue;
//   this._step = step;
//   this.refs = this._getRefs(rootSelector);

//   this._bindEvents();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//   refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//   refs.value = refs.container.querySelector("#value");
//   console.log(refs.incrementBtn);
//   console.log(refs.decrementBtn);
//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this.refs.incrementBtn.addEventListener("click", () => {
//     console.log(this);
//     this.increment();
//     this.updateValueUI();
//   });
//   this.refs.decrementBtn.addEventListener("click", () => {
//     console.log(this);
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this.refs.value.textContent = this._value;
// };
// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter = new CounterPlugin({ rootSelector: "#counter", step: 1 });
