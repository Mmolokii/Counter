const countEl = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

let count = 0;

function loadCount() {
  const saved = localStorage.getItem('counterValue');
  if (saved !== null) {
    count = parseInt(saved, 10);
    updateDisplay();
  }
}

function updateDisplay() {
  countEl.textContent = count;
}

function saveCount() {
  localStorage.setItem('counterValue', count);
}

incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
  saveCount();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
  saveCount();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
  saveCount();
});

// Keyboard shortcuts
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowUp') {
    count++;
    updateDisplay();
    saveCount();
  } else if (e.key === 'ArrowDown') {
    count--;
    updateDisplay();
    saveCount();
  } else if (e.key.toLocaleLowerCase() === 'r') {
    count = 0;
    updateDisplay();
    saveCount();
  }
});

// Initialise
loadCount();
