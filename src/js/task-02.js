const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsContainerRef = document.querySelector("#ingredients");

const elements = ingredients.map((element) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = element;

  return itemEl;
});

ingredientsContainerRef.append(...elements);
