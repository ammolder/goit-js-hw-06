const categoriesAllEl = document.querySelector("#categories");
// console.log(categoriesAll);

const totalCategories = (node) => {
  return `Number of categories: ${categoriesAllEl.children.length}`;
};

const categoriesCout = totalCategories(categoriesAllEl);
console.log(totalCategories());

const categoriesInfo = (elements) => {
  const result = [];
  for (let i = 0; i < elements.length; i += 1) {
    const categoryNames = elements[i].children[0].textContent;
    const elementCount = elements[i].children[1].children.length;
    result.push({
      name: categoryNames,
      count: elementCount,
    });
  }
  return result;
};

const result = categoriesInfo(categoriesAllEl.children);

const printCategoriesResult = () => {
  result.forEach((item) => {
    console.log(`Category: ${item.name}`);
    console.log(`Elements: ${item.count}`);
  });
};

printCategoriesResult(result);
