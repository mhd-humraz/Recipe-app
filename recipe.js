// Toggle Cooking Mode
const cookingModeBtn = document.querySelector('.btn-cooking-mode');
const timerButtons = document.querySelectorAll('.timer-btn');
const timerModal = document.querySelector('.timer-modal');
const timerDisplay = document.querySelector('.timer-display');
const timerStartBtn = document.querySelector('.timer-start');
const timerPauseBtn = document.querySelector('.timer-pause');
const timerResetBtn = document.querySelector('.timer-reset');
const timerCloseBtn = document.querySelector('.timer-close');

let timerInterval;
let timeLeft = 0;

// Cooking Mode Toggle
cookingModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('cooking-mode');
  if (document.body.classList.contains('cooking-mode')) {
    cookingModeBtn.innerHTML = '<i class="fas fa-times"></i> Exit Cooking Mode';
    cookingModeBtn.style.backgroundColor = '#e74c3c';
  } else {
    cookingModeBtn.innerHTML = '<i class="fas fa-utensils"></i> Start Cooking Mode';
    cookingModeBtn.style.backgroundColor = 'white';
  }
});

// Timer Buttons
timerButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const minutes = parseInt(e.target.dataset.time);
    timeLeft = minutes * 60;
    updateTimerDisplay();
    timerModal.classList.remove('hidden');
  });
});

// Timer Controls
timerStartBtn.addEventListener('click', startTimer);
timerPauseBtn.addEventListener('click', pauseTimer);
timerResetBtn.addEventListener('click', resetTimer);
timerCloseBtn.addEventListener('click', () => timerModal.classList.add('hidden'));

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Play sound when timer ends
      new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3').play();
      return;
    }
    timeLeft--;
    updateTimerDisplay();
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  const minutes = parseInt(document.querySelector('.timer-btn').dataset.time);
  timeLeft = minutes * 60;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
// Function to load and display recipe
function loadRecipe() {
  // Get recipe ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const recipeId = urlParams.get('id');
  const recipe = getRecipeById(recipeId);

  if (!recipe) {
    document.getElementById('recipe-content').innerHTML = `
      <div class="error-message">
        <h2>Recipe not found</h2>
        <a href="index.html" class="btn">Return to homepage</a>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = `${recipe.title} | RecipeMaster`;

  // Populate recipe data
  const ingredientsList = recipe.ingredients ? recipe.ingredients.map(ing => `
    <li>
      <input type="checkbox" id="ing-${ing.replace(/\s+/g, '-')}">
      <label for="ing-${ing.replace(/\s+/g, '-')}">${ing}</label>
    </li>
  `).join('') : '';

  const stepsList = recipe.steps ? recipe.steps.map((step, i) => `
    <div class="step">
      <div class="step-number">${i + 1}</div>
      <div class="step-content">
        <p>${step}</p>
      </div>
    </div>
  `).join('') : '';

  document.getElementById('recipe-content').innerHTML = `
    <div class="recipe-header">
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-hero">
      <div class="recipe-title">
        <h1>${recipe.title}</h1>
        <div class="recipe-meta">
          <span><i class="fas fa-clock"></i> ${recipe.time}</span>
          <span><i class="fas fa-utensils"></i> ${recipe.servings} servings</span>
          <span><i class="fas fa-signal"></i> ${recipe.difficulty}</span>
        </div>
      </div>
    </div>

    <div class="recipe-body">
      <section class="ingredients">
        <h2><i class="fas fa-shopping-basket"></i> Ingredients</h2>
        <ul class="ingredient-list">
          ${ingredientsList}
        </ul>
      </section>

      <section class="instructions">
        <h2><i class="fas fa-list-ol"></i> Instructions</h2>
        ${stepsList}
      </section>
    </div>
  `;
}

// Initialize recipe page
if (document.getElementById('recipe-content')) {
  document.addEventListener('DOMContentLoaded', () => {
    loadRecipe();
    
    // Your existing timer and cooking mode code
    const cookingModeBtn = document.querySelector('.btn-cooking-mode');
    // ... rest of your timer code ...
  });
}
