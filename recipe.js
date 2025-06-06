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
  },
  {
    title: "Chicken Curry",
    image: "images/chicken-curry.jpg",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Spices"],
    steps: "Cook onions. Add chicken and spices. Simmer with tomatoes."
  }
];

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const recipeTitle = getQueryParam("title");
const recipe = recipes.find(r => r.title === recipeTitle);

if (recipe) {
  document.getElementById("recipe-title").textContent = recipe.title;
  document.getElementById("recipe-image").src = recipe.image;
  document.getElementById("recipe-image").alt = recipe.title;

  const ingredientsList = document.getElementById("ingredients-list");
  recipe.ingredients.forEach(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });

  document.getElementById("steps").textContent = recipe.steps;
} else {
  document.body.innerHTML = "<h2>Recipe not found.</h2><a href='index.html'>Back to home</a>";
}
