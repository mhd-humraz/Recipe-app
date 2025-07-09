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
