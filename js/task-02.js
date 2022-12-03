const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerRef = document.querySelector("#ingredients");

const makeIngredientCollection = (options) => {
  return options.map((option) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = option;

    return itemEl;
  });
};

const elements = makeIngredientCollection(ingredients);

ingredientsContainerRef.append(...elements);
