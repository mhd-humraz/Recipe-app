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
