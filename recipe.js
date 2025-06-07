const recipes = [
  {
    title: "Spaghetti Bolognese",
    image: "images/spaghetti.jpg",
    ingredients: ["Spaghetti", "Meat", "Tomato Sauce"],
    steps: "Boil pasta. Cook meat. Mix with sauce."
  },
  {
    title: "Vegetable Salad",
    image: "src/img/salad.jpg",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive oil"],
    steps: "Chop veggies. Mix and serve."
  },
  {
    title: "Chicken Biriyani",
    image: "src/img/chiken-biryani.jpg",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Spices"],
    steps: "Cook onions. Add chicken and spices. Simmer with tomatoes."
  }
];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

window.addEventListener("DOMContentLoaded", () => {
  const recipeTitle = getQueryParam("title");
  const recipe = recipes.find(r => r.title === recipeTitle);

  // Debug logging (optional)
  console.log("Selected recipe title from URL:", recipeTitle);
  console.log("Recipe found:", recipe);

  if (recipe) {
    document.getElementById("recipe-title").textContent = recipe.title;
    const imageElement = document.getElementById("recipe-image");
    imageElement.src = recipe.image;
    imageElement.alt = recipe.title;

    const ingredientsList = document.getElementById("ingredients-list");
    recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });

    document.getElementById("steps").textContent = recipe.steps;
  } else {
    document.body.innerHTML = `
      <h2>Recipe not found.</h2>
      <a href="index.html">← Back to home</a>
    `;
  }
});
