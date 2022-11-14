const categEl = document.querySelector("#categories").children.length;
console.log("Number of categories: ", categEl);

const itemsEl = document.querySelectorAll(".item");
itemsEl.forEach((element) => {
  let elTitle = element.querySelector("h2").textContent;
  let oneTitleEl = element.querySelectorAll("li");
  let oneTitleElLength = oneTitleEl.length;

  console.log("Category: ", elTitle);
  console.log("Elements: ", oneTitleElLength);
});
