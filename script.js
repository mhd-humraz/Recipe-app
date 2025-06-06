const recipes = [
  {
    title: "Chicken Biryani",
image: "src/img/chicken-biryani.jpg",
ingredients: ["Basmati Rice", "Chicken", "Yogurt", "Onions", "Tomatoes", "Biryani Spices", "Garlic", "Ginger", "Cilantro", "Mint", "Oil", "Salt"],
steps: "Marinate chicken with yogurt and spices. Fry onions until golden. Cook chicken with tomatoes and spices.Boil rice separately. Layer chicken and rice. Cook on low heat (dum) until done. Garnish with cilantro and mint."

  },
  {
    title: "Vegetable Salad",
    image: "src/img/salad.jpg",
    ingredients: ["Lettuce", "Tomato", "Cucumber", "Olive oil"],
    steps: "Chop veggies. Mix and serve."
  },
  {
    title: "Masala Dosa",
    image: "src/img/masala-dosa.jpg",
    ingredients: ["Dosa batter","Potatoes","Onions","Green chilies","Mustard seeds", "Curry leaves","Turmeric powder", "Salt", "Oil","Ginger",
  "Coriander leaves"
],
steps: "Boil and mash potatoes. In a pan, heat oil, add mustard seeds, curry leaves, chopped onions, green chilies, and ginger. Sauté, then add turmeric and salt. Mix in mashed potatoes and coriander leaves for the filling. Heat dosa pan, spread batter thinly, cook until crisp. Place potato filling inside, fold and serve hot."

  },
  {
    title: "Puttu",
    image: "src/img/puttu.jpg",
    ingredients: ["Rice flour","Grated coconut","Salt","Water"
],
steps: "Mix rice flour with salt and enough water to make a crumbly mixture. Layer the puttu maker with grated coconut and the rice flour mixture alternately. Steam the layers for about 5-7 minutes until cooked. Serve hot with banana, chickpea curry, or kadala curry."

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
