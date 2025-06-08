const recipes = [
 {
title: "Masala Dosa",
  image: "src/img/masala-dosa.jpg",
 
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
    
  },
  {
    title: "Paneer Butter Masala",
    image: "src/img/paneer-butter.jpg",
  
  },
  {
    title: "Beef Biryani",
    image: "src/img/beef-biryani.jpg",
    
  },
  {
    title: "Egg Fried Rice",
    image: "src/img/egg-fried-rice.jpg",
   
  },
  {
    title: "Sambar",
    image: "src/img/sambar.jpg",
    ingredients: [
   
  },
  {
    title: "Fish Curry",
    image: "src/img/fish-curry.jpg",
 

  },
  {
    title: "Gobi Manchurian",
    image: "src/img/gobi-manchurian.jpg",

  {
    title: "Upma",
    image: "src/img/upma.jpg",

  },
  {
    title: "Butter Chicken",
    image: "src/img/butter-chicken.jpg",
  
  },
  {
    title: "Tandoori Chicken",
    image: "src/img/tandoori-chicken.jpg",
dges.
  },
  {
    title: "Egg Curry",
    image: "src/img/egg-curry.jpg",
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
