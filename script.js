// counter.js - Self-contained Counter Module
const Counter = (function () {
  let count = 0;
  let countEl;

  function updateDisplay() {
    if (countEl) countEl.textContent = count;
  }

  function saveToStorage() {
    localStorage.setItem('counterValue', count);
  }

  function loadFromStorage() {
    const saved = localStorage.getItem('counterValue');
    if (saved !== null) {
      count = parseInt(saved, 10);
      updateDisplay();
    }
  }

  function increment() {
    count++;
    updateDisplay();
    saveToStorage();
  }

  function decrement() {
    count--;
    updateDisplay();
    saveToStorage();
  }

  function reset() {
    count = 0;
    updateDisplay();
    saveToStorage();
  }
})();
