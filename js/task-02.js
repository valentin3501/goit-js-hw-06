const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
let ulList = document.querySelector("#ingredients");
let foodIngredients = ingredients.forEach((ingredient) => {
  let items = document.createElement("li");
  items.innerHTML = ingredient;
  items.classList.add("item");
  ulList.append(items);
});

console.log(ulList);
