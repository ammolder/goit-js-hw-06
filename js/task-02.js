const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const ingredientsName = (names) => {
  return names.map((name) => {
    const ingredientsEl = document.createElement("li");
    ingredientsEl.textContent = name;
    ingredientsEl.classList.add("item");
    return ingredientsEl;
  });
};

const result = ingredientsName(ingredients);
listEl.append(...result);

console.log(listEl);
