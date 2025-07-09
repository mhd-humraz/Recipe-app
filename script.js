// Sample recipe data
const recipes = [
  {
    id: 1,
    title: "Creamy Garlic Parmesan Pasta",
    description: "A rich and creamy pasta dish with roasted garlic and freshly grated parmesan cheese.",
    image: "https://images.unsplash.com/photo-1611270633750-86e0f1db3174",
    time: "25 mins",
    servings: 4,
    difficulty: "Easy",
    category: "Vegetarian",
    badge: "Chef's Pick"
  },
  {
    id: 2,
    title: "Spicy Thai Basil Chicken",
    description: "Authentic Thai street food with a perfect balance of spicy, sweet, and savory flavors.",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435",
    time: "20 mins",
    servings: 2,
    difficulty: "Medium",
    category: "Asian",
    badge: "Trending"
  },
  {
    id: 3,
    title: "Avocado & Quinoa Salad",
    description: "A healthy and refreshing salad packed with protein and essential nutrients.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    time: "15 mins",
    servings: 3,
    difficulty: "Easy",
    category: "Vegan",
    badge: "Healthy"
  },
  {
    id: 4,
    title: "Classic Beef Burger",
    description: "Juicy beef patty with melted cheese, crisp lettuce, and special sauce on a toasted bun.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    category: "American",
    badge: "Popular"
  },
  {
    id: 5,
    title: "Chocolate Lava Cake",
    description: "Decadent chocolate cake with a molten center, served warm with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e",
    time: "40 mins",
    servings: 6,
    difficulty: "Hard",
    category: "Dessert",
    badge: "Sweet"
  },
  {
    id: 6,
    title: "Mediterranean Grilled Salmon",
    description: "Perfectly grilled salmon with lemon, herbs, and olive oil served with roasted vegetables.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    time: "35 mins",
    servings: 2,
    difficulty: "Medium",
    category: "Seafood",
    badge: "Premium"
  },
  {
    id: 7,
    title: "Paneer Butter Masala",
    description: "A rich, creamy North Indian curry made with paneer cubes simmered in a spiced tomato gravy.",
    image: "https://images.unsplash.com/photo-1621961453503-7b4b8d0c5c88",
    time: "30 mins",
    servings: 4,
    difficulty: "Medium",
    category: "Indian",
    badge: "Most Loved"
  },
  {
    id: 8,
    title: "Margherita Pizza",
    description: "Classic Italian pizza topped with fresh mozzarella, basil, and tomato sauce.",
    image: "https://images.unsplash.com/photo-1601924579440-3a60e8f4c5f2",
    time: "45 mins",
    servings: 2,
    difficulty: "Medium",
    category: "Italian",
    badge: "Chef’s Choice"
  },
  {
    id: 9,
    title: "Mango Smoothie Bowl",
    description: "A refreshing tropical smoothie bowl topped with fresh fruits, granola, and seeds.",
    image: "https://images.unsplash.com/photo-1505253210343-d4fd5a52faaa",
    time: "10 mins",
    servings: 1,
    difficulty: "Easy",
    category: "Vegan",
    badge: "Refreshing"
  },
  {
    id: 10,
    title: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with spiced chicken, herbs, and saffron in traditional dum style.",
    image: "https://images.unsplash.com/photo-1604909053175-3762be7c47c7",
    time: "1 hr",
    servings: 5,
    difficulty: "Hard",
    category: "Indian",
    badge: "Festive"
  },
  {
    id: 11,
    title: "Sushi Platter",
    description: "An assorted platter of sushi rolls including California rolls, nigiri, and spicy tuna rolls.",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754",
    time: "50 mins",
    servings: 3,
    difficulty: "Hard",
    category: "Japanese",
    badge: "Exotic"
  },
  {
    id: 12,
    title: "French Toast with Berries",
    description: "Golden-brown French toast topped with maple syrup, fresh berries, and powdered sugar.",
    image: "https://images.unsplash.com/photo-1559628231-63700113fc4d",
    time: "20 mins",
    servings: 2,
    difficulty: "Easy",
    category: "Breakfast",
    badge: "Quick Bite"
  }
];

// Function to render recipes
function renderRecipes() {
  const container = document.getElementById('recipes-container');
  container.innerHTML = '';
  
  recipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      ${recipe.badge ? `<span class="recipe-badge">${recipe.badge}</span>` : ''}
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-meta">
          <span><i class="fas fa-clock"></i> ${recipe.time}</span>
          <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes();
  
  // Add click event to filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      // In a real app, you would filter recipes here
    });
  });
  
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    // In a real app, you would filter recipes based on search term
  });
});
// Recipe database - keep this as is
const recipes = [
  // ... your existing recipe data ...
];

// Utility function to get recipe by ID
function getRecipeById(id) {
  return recipes.find(recipe => recipe.id === parseInt(id));
}

// Function to render recipe cards on homepage
function renderRecipeCards() {
  const container = document.getElementById('recipes-container');
  if (!container) return;

  container.innerHTML = recipes.map(recipe => `
    <a href="recipe.html?id=${recipe.id}" class="recipe-card">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
      ${recipe.badge ? `<span class="recipe-badge">${recipe.badge}</span>` : ''}
      <div class="recipe-content">
        <h3 class="recipe-title">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <div class="recipe-meta">
          <span><i class="fas fa-clock"></i> ${recipe.time}</span>
          <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
        </div>
      </div>
    </a>
  `).join('');
}

// Initialize homepage
if (document.getElementById('recipes-container')) {
  document.addEventListener('DOMContentLoaded', () => {
    renderRecipeCards();
    
    // Filter button functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });
}
