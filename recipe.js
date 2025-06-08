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
      "2 cups puttu podi (rice flour)",
      "1 cup grated coconut",
      "Water (for steaming)",
      "1 cup black chickpeas (kadala), soaked overnight",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 green chili, sliced",
      "Small piece ginger + 2 cloves garlic, chopped",
      "A few curry leaves",
      "1/2 tsp turmeric",
      "1 tsp chili powder",
      "1 tsp garam masala",
      "Salt",
      "1 tbsp oil"
    ],
    steps: `Soak chickpeas overnight, drain, and pressure-cook with water until soft (~15 min cooking, 10 min pressure).
In a pan, heat oil, sauté onion, tomato, green chili, ginger, garlic, and curry leaves for ~4 minutes.
Add turmeric, chili powder, garam masala, salt—cook ~2 minutes.
Stir in cooked chickpeas, simmer ~10 minutes until curry thickens. Adjust salt.
For puttu, mix rice flour with water and salt until crumbly (looks like wet sand).
Layer grated coconut and flour in the puttu maker.
Steam for ~5–6 minutes until done. Serve with curry.`
  },
  {
    title: "Paneer Butter Masala",
    image: "src/img/paneer-butter.jpg",
    ingredients: [
      "200 g paneer cubes",
      "2 tomatoes, chopped",
      "1 onion, chopped",
      "2 cloves garlic",
      "Piece of ginger",
      "2 tbsp butter",
      "2 tbsp cream",
      "6–8 cashews",
      "1 tsp garam masala",
      "1 tsp chili powder",
      "½ tsp turmeric",
      "½ tsp kasuri methi",
      "Salt",
      "1 tsp sugar"
    ],
    steps: `In oil, sauté onion, garlic, ginger, tomatoes, and cashews, cook ~6 minutes until softened.
Let cool, then blend to a smooth paste.
Heat butter in pan, add paste and spices; cook ~5 minutes until oil separates.
Stir in cream, salt, sugar; cook ~2 minutes.
Add paneer cubes, simmer ~5 minutes.
Crush kasuri methi in hand, sprinkle on top.
Serve warm with naan, roti, or rice.`
  },
  {
    title: "Beef Biryani",
    image: "src/img/beef-biryani.jpg",
    ingredients: [
      "500 g beef, cubed",
      "2 cups basmati rice",
      "2 onions, thinly sliced",
      "2 tomatoes, chopped",
      "2 tbsp ginger garlic paste",
      "1/2 cup yogurt",
      "Whole spices (bay leaf, cinnamon, cardamom, cloves)",
      "2 tsp biryani masala",
      "1/2 tsp turmeric",
      "1 tsp chili powder",
      "Fresh coriander and mint leaves",
      "Ghee or oil",
      "Salt"
    ],
    steps: `Wash and soak rice for 30 minutes. Cook until 80% done, then drain.
Marinate beef with yogurt, salt, turmeric, chili powder, biryani masala, and ginger garlic paste. Rest 30 minutes.
In a pot, heat ghee, add whole spices, and sauté onions until golden brown (~10 min).
Add tomatoes and cook until soft. Add marinated beef and cook on medium heat for 20–30 minutes until tender.
Layer cooked rice over beef mixture. Sprinkle chopped coriander, mint, and a bit of ghee.
Cover and cook on low heat (dum) for 15 minutes.
Serve hot with raita or pickle.`
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
  },
  {
    title: "Sambar",
    image: "src/img/sambar.jpg",
    ingredients: [
      "1 cup toor dal",
      "2 cups mixed vegetables",
      "1 tbsp sambar powder",
      "1/2 tsp turmeric",
      "1 tsp mustard seeds",
      "A few curry leaves",
      "2 dried red chilies",
      "1 tbsp tamarind pulp",
      "Salt to taste"
    ],
    steps: `Pressure cook toor dal with turmeric until soft (~15 minutes).
Boil vegetables until tender.
Add sambar powder, tamarind pulp, and salt to the cooked dal and vegetables, simmer for 10–12 minutes.
In a small pan, heat oil, add mustard seeds, curry leaves, and dried red chilies. Let them splutter.
Pour the tempering over the sambar.
Serve hot with rice or dosa.`
  },
  {
    title: "Fish Curry",
    image: "src/img/fish-curry.jpg",
    ingredients: [
      "500 g fish slices",
      "2 tbsp chili powder",
      "1 tsp turmeric",
      "1 tbsp tamarind pulp",
      "1 onion, chopped",
      "2 green chilies",
      "Curry leaves",
      "1 tbsp ginger garlic paste",
      "Salt to taste"
    ],
    steps: `Heat oil in a pan, sauté onions, green chilies, curry leaves.
Add ginger garlic paste, cook for 2 minutes.
Add chili powder, turmeric, tamarind, and salt with water. Bring to a boil.
Add fish pieces, cover and cook on medium for 10–12 minutes.
Serve with rice.`
  },
  {
    title: "Gobi Manchurian",
    image: "src/img/gobi-manchurian.jpg",
    ingredients: [
      "1 medium cauliflower (florets)",
      "2 tbsp cornflour",
      "2 tbsp all-purpose flour",
      "1 tsp chili powder",
      "2 cloves garlic",
      "2 tbsp soy sauce",
      "2 tbsp tomato ketchup",
      "Spring onion for garnish"
    ],
    steps: `Boil cauliflower for 3–4 minutes. Drain.
Mix flour, cornflour, chili powder, and water to make batter. Coat florets and deep fry until crisp.
In a pan, sauté garlic, add sauces and 2 tbsp water.
Toss fried florets in sauce for 2 minutes.
Garnish and serve hot.`
  },
  {
    title: "Upma",
    image: "src/img/upma.jpg",
    ingredients: [
      "1 cup rava (semolina)",
      "1 onion, chopped",
      "2 green chilies",
      "1 tsp mustard seeds",
      "A few curry leaves",
      "2 cups water",
      "Salt and oil"
    ],
    steps: `Roast rava till light golden (~4 minutes). Set aside.
In pan, heat oil, splutter mustard seeds, curry leaves.
Add onions, chilies, sauté till soft (~3 min).
Add water and salt, bring to boil.
Stir in rava slowly, cook while stirring until thick (~5 minutes).
Serve hot with chutney.`
  },
  {
    title: "Butter Chicken",
    image: "src/img/butter-chicken.jpg",
    ingredients: [
      "500 g chicken",
      "1/2 cup yogurt",
      "1 tbsp ginger garlic paste",
      "2 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "1/2 cup cream",
      "Spices: garam masala, chili powder, turmeric",
      "Salt"
    ],
    steps: `Marinate chicken with yogurt, ginger garlic paste, spices—rest 30 min.
Grill or pan-fry until cooked (~10 min).
Blend tomatoes, onion to smooth paste.
Heat butter, add paste and spices—cook ~5–7 min.
Add chicken, cream, simmer 10 minutes.
Serve hot with naan or rice.`
  },
  {
    title: "Tandoori Chicken",
    image: "src/img/tandoori-chicken.jpg",
    ingredients: [
      "4 chicken legs",
      "1 cup yogurt",
      "1 tbsp ginger garlic paste",
      "1 tsp chili powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "Juice of 1 lemon",
      "Salt"
    ],
    steps: `Score chicken pieces. Marinate with all ingredients and refrigerate 4–6 hours.
Grill or bake at 200°C for 25–30 minutes until cooked and slightly charred.
Serve hot with onion salad and lemon wedges.`
  },
  {
    title: "Egg Curry",
    image: "src/img/egg-curry.jpg",
    ingredients: [
      "4 boiled eggs",
      "1 onion, chopped",
      "2 tomatoes, chopped",
      "1 tbsp ginger garlic paste",
      "1 tsp chili powder",
      "1/2 tsp turmeric",
      "1 tsp garam masala",
      "Salt",
      "Coriander for garnish"
    ],
    steps: `Heat oil, sauté onions till golden.
Add ginger garlic paste, tomatoes, and spices. Cook ~6 minutes until soft.
Add water and salt, bring to a boil.
Add boiled eggs, simmer for 5–6 minutes.
Garnish and serve with chapati or rice.`
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
