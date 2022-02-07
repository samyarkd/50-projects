const clear = document.getElementById("clear");
const colorPicker = document.getElementById("color");
const toolbox = document.querySelector(".toolbox");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const wrapper = document.querySelector(".wrapper");
const sizeBtn = document.getElementById("size");
const inc = document.getElementById("increase");
const dec = document.getElementById("decrease");

let color = "rgb(15, 105, 255)";
let size = 10;
let xy = { x: 200, y: 200 };
let isPressed = false;

toolbox.style.backgroundColor = color;
wrapper.style.borderColor = color;
wrapper.style.boxShadow = `0 0 10px ${color}`;

sizeBtn.innerText = size;

inc.addEventListener("click", () => {
  if (!(size > 29)) {
    size++;
    sizeBtn.innerText = size;
  }
});

dec.addEventListener("click", () => {
  if (!(size < 2)) {
    size--;
    sizeBtn.innerText = size;
  }
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

colorPicker.addEventListener("change", (e) => {
  color = e.target.value;
  toolbox.style.backgroundColor = e.target.value;
  wrapper.style.borderColor = e.target.value;
  wrapper.style.boxShadow = `0 0 10px ${e.target.value}`;
});

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  xy.x = e.offsetX;
  xy.y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  xy.x = undefined;
  xy.y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const xy2 = { x: e.offsetX, y: e.offsetY };

    drawCircle(xy2);
    drawLine(xy, xy2);

    xy.x = xy2.x;
    xy.y = xy2.y;
  }
});

function drawCircle(xy) {
  ctx.beginPath();
  ctx.arc(xy.x, xy.y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(xy1, xy2) {
  ctx.beginPath();
  ctx.moveTo(xy1.x, xy1.y);
  ctx.lineTo(xy2.x, xy2.y);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
