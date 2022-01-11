const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
let lanePercent = 0;

next.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
  }

  update();
});

prev.addEventListener("click", () => {
  if (currentActive !== 1) {
    currentActive--;
  }

  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");

  lanePercent = ((actives.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = `${lanePercent}%`;

  let bodyProgress = document.getElementById("body-progress");
  bodyProgress.style.width = `${lanePercent}%`;

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
};
