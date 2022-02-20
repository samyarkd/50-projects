const container = document.getElementById("container");
const btn = document.getElementById("btn");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const boxes = 800;

// Create Boxes and add event listeners to each box
handleMouse();
// Random Start animation
randomStart();

// **********************
// *** Functions 👇👇 ***
// **********************

// Randomly give color to boxes
function randomStart() {
  const boxList = document.querySelectorAll(".box");
  boxList.forEach((box, idx) => {
    const randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      setTimeout(() => {
        setColor(box);
        removeColor(box);
      }, idx * 2);
    }
  });

  btn.addEventListener("click", randomStart);
}

// Handle Mouse
function handleMouse() {
  for (let i = 0; i < boxes; i++) {
    const box = document.createElement("span");
    box.classList.add("box");

    box.addEventListener("mouseover", () => {
      setColor(box);
    });

    box.addEventListener("mouseleave", () => {
      removeColor(box);
    });

    container.appendChild(box);
  }
}

// Get Random Color from colors var
function getRandomColor() {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}

// Set Box color
function setColor(box) {
  const color = getRandomColor();
  box.style.backgroundColor = color;
  box.style.boxShadow = `0 0 6px ${color}`;
}

// Remove Box color after a specific time
function removeColor(box) {
  setTimeout(() => {
    box.style.backgroundColor = "#1d1d1d";
    box.style.boxShadow = `0 0 6px #000`;
  }, 1000);
}
