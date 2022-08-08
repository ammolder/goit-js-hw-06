const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", onDisplayNow);
inputName.addEventListener("blur", onResetOutput);

function onDisplayNow(event) {
  outputName.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
}
function onResetOutput(event) {
  if (event.currentTarget.value === "") {
    event.currentTarget.value === "";
  }
}
