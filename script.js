const recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "images/spaghetti.jpg",
    ingredients: ["Spaghetti", "Meat", "Tomato Sauce"],
    steps: "Boil pasta. Cook meat. Mix with sauce."
  },
  {
    title: "Vegetable Salad",
    image: "images/salad.jpg",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive oil"],
    steps: "Chop veggies. Mix and serve."
  }
];

function renderRecipes(recipesToRender) {
  const container = document.getElementById("recipeContainer");
  container.innerHTML = "";
  recipesToRender.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h3>${recipe.title}</h3>
    `;
    card.addEventListener("click", () => {
      alert(`Ingredients: ${recipe.ingredients.join(", ")}\n\nSteps: ${recipe.steps}`);
    });
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", function() {
  const keyword = this.value.toLowerCase();
  const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(keyword));
  renderRecipes(filtered);
});

renderRecipes(recipes);