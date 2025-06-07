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
 },
  {
    title: "Puttu with Kadala Curry",
    image: "src/img/puttu.jpg",
    ingredients: [
      "Puttu podi (rice flour)",
      "Grated coconut",
      "Water",
      "Black chickpeas (kadala)",
      "Onion, tomato, green chili",
      "Ginger, garlic, curry leaves",
      "Turmeric, chili powder, garam masala",
      "Salt and oil"
    ],
    steps: `Soak black chickpeas overnight and pressure cook until soft.
In a pan, sauté onion, tomato, ginger, garlic, and curry leaves.
Add turmeric, chili powder, garam masala, and salt. Cook well.
Add cooked chickpeas and simmer for 10 minutes.
To prepare puttu, mix rice flour with water until crumbly.
Layer grated coconut and flour alternately in a puttu maker.
Steam for 5-6 minutes and serve hot with kadala curry.`
  },
  {
    title: "Paneer Butter Masala",
    image: "src/img/paneer-butter.jpg",
    ingredients: [
      "Paneer cubes",
      "Tomatoes, onion, garlic, ginger",
      "Butter, cream",
      "Cashews",
      "Garam masala, chili powder, turmeric",
      "Kasuri methi (dry fenugreek)",
      "Salt, sugar"
    ],
    steps: `Sauté onions, garlic, ginger, and tomatoes. Blend to a smooth paste with cashews.
Heat butter in a pan, add the paste and spices. Cook until oil separates.
Add cream, salt, and sugar. Mix well.
Add paneer cubes and simmer for 5 minutes.
Garnish with kasuri methi and serve with naan or rice.`
  },
  {
    title: "Egg Fried Rice",
    image: "src/img/egg-fried-rice.jpg",
    ingredients: [
      "Cooked rice",
      "Eggs",
      "Carrots, beans, capsicum",
      "Spring onions",
      "Soy sauce, pepper, salt",
      "Oil"
    ],
    steps: `Scramble eggs in a hot wok and set aside.
Sauté chopped vegetables until slightly tender.
Add cooked rice and mix well.
Pour soy sauce, pepper, and salt. Stir-fry everything.
Add scrambled eggs and spring onions. Serve hot.`
  }
];

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
