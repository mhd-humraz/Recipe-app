const recipes = [
 {
  title: "Masala Dosa",
  image: "src/img/masala-dosa.jpg",
  ingredients: ["Dosa batter", "Potatoes", "Onions", "Turmeric", "Mustard seeds", "Curry leaves"],
  steps: "Prepare potato masala.. Add masala filling. Fold and serve hot with chutney."
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

const container = document.getElementById("recipes-container");
const searchInput = document.getElementById("search");

function showRecipes(list) {
  container.innerHTML = "";
  if (list.length === 0) {
    container.innerHTML = "<p>No recipes found.</p>";
    return;
  }
  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <h3>${recipe.title}</h3>
    `;

    card.addEventListener("click", () => {
      const recipeTitle = encodeURIComponent(recipe.title);
      window.location.href = `recipe.html?title=${recipeTitle}`;
    });

    container.appendChild(card);
  });
}

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(query));
  showRecipes(filtered);
});

// Show all recipes initially
showRecipes(recipes);
