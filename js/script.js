const container = document.querySelector(".container");

// Creation elements
const counter = document.createElement("div");
counter.id = "counter";
counter.textContent = "0";
container.appendChild(counter);

const buttonsContainer = document.createElement("div");
buttonsContainer.className = "buttons-container";
container.appendChild(buttonsContainer);

const decrementBtn = document.createElement("button");
decrementBtn.id = "decrement";
decrementBtn.textContent = "-";
buttonsContainer.appendChild(decrementBtn);

const resetBtn = document.createElement("button");
resetBtn.id = "reset";
resetBtn.textContent = "Reset";
buttonsContainer.appendChild(resetBtn);

const incrementBtn = document.createElement("button");
incrementBtn.id = "increment";
incrementBtn.textContent = "+";
buttonsContainer.appendChild(incrementBtn);

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
