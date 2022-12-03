const itemRef = document.querySelectorAll(".item");
console.log("Number of categories: ", itemRef.length);

for (const item of itemRef) {
  const itemTitleRef = item.querySelector("h2");
  const subItemRef = item.querySelectorAll("li");

  console.log("\nCategory: ", itemTitleRef.textContent);
  console.log("Elements: ", subItemRef.length);
}
