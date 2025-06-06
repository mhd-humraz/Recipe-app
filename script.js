const recipes = [
  {
    title: "Chicken Biryani",
image: "src/img/chicken-biryani.jpg",
ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onions", "Tomatoes", "Biryani Spices", "Garlic", "Ginger", "Cilantro", "Mint", "Oil", "Salt"],
steps: "Marinate chicken with yogurt and spices. Fry onions until golden. Cook chicken with tomatoes and spices.Boil rice separately. Layer chicken and rice. Cook on low heat (dum) until done. Garnish with cilantro and mint."

  },
  {
    title: "Vegetable Salad",
    image: "scr/img/salad.jpg",
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
