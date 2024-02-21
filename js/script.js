// Select DOM elements
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const counter = document.getElementById("counter");

// Initialize the counter
let counterValue = 0;
let intervalId;

// Increment function
const incrementCounter = () => {
  counterValue++;
  counter.textContent = counterValue;
};

// Decrement function
const decrementCounter = () => {
  counterValue--;
  counter.textContent = counterValue;
};

// Add mousedown event to start counting when button is pressed
incrementBtn.addEventListener("mousedown", () => {
  incrementCounter();
  intervalId = setInterval(incrementCounter, 200);
});

decrementBtn.addEventListener("mousedown", () => {
  decrementCounter();
  intervalId = setInterval(decrementCounter, 200);
});

// Add mouseup event to stop counting when button is released
document.addEventListener("mouseup", () => {
  clearInterval(intervalId);
});

// Click event for reset button
resetBtn.addEventListener("click", () => {
  counterValue = 0;
  counter.textContent = counterValue;
});
