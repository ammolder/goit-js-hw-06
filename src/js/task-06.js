const validationCounter = document.querySelector("#validation-input");

validationCounter.addEventListener("blur", () => {
  validationCounter.value.length >= 6
    ? validationCounter.classList.add("valid") ||
      validationCounter.classList.remove("invalid")
    : validationCounter.classList.add("invalid") ||
      validationCounter.classList.remove("valid");
});
