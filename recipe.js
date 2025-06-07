const recipes = [
  {
  title: "Masala Dosa",
  image: "src/img/masala-dosa.jpg",
  ingredients: [
    "Dosa batter",
    "3-4 boiled potatoes",
    "1 large onion, thinly sliced",
    "1 tsp mustard seeds",
    "1 tsp turmeric powder",
    "1-2 green chilies, chopped",
    "A few curry leaves",
    "2 tbsp oil",
    "Salt to taste",
    "Fresh coriander leaves (optional)"
  ],
  steps: `Heat oil in a pan and add mustard seeds. Let them splutter.
Add curry leaves, chopped green chilies, and sliced onions. Sauté until onions turn translucent.
Add turmeric powder and salt. Mix well.
Peel and mash the boiled potatoes, then add them to the pan.
Stir everything together and cook for 5 minutes, letting the flavors blend.
Add chopped coriander leaves if using, and mix well. Remove from heat.
Heat a non-stick pan or tawa. Pour a ladle of dosa batter and spread it thin in a circular motion.
Drizzle some oil around the edges and cook until the bottom is golden brown and crisp.
Place some potato masala filling on one half of the dosa.
Fold the dosa over the filling and cook for another minute.
Serve hot with coconut chutney and sambar. Enjoy your delicious Masala Dosa!`
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
