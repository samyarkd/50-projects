const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const body = document.body;
const img = document.querySelectorAll("#imgs img");
const fac = new FastAverageColor();

let idx = 0;
let interval = setInterval(run, 2000);
let colors = [];

img.forEach((img) => {
  fac
    .getColorAsync(img)
    .then((color) => {
      colors.push({
        color: color.rgba,
        fColor: color.isDark ? "#fff" : "#000",
      });
    })
    .catch((e) => {
      console.log(e);
    });
});

fac
  .getColorAsync(img[0])
  .then((color) => {
    body.style.backgroundColor = `${color.rgba}`;
  })
  .catch((e) => {
    console.log(e);
  });

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
  body.style.backgroundColor = `${colors[idx].color}`;
}

leftBtn.addEventListener("click", () => {
  clearInterval(interval);
  idx--;
  changeImage();
  interval = setInterval(run, 2000);
});

rightBtn.addEventListener("click", () => {
  clearInterval(interval);
  idx++;
  changeImage();
  interval = setInterval(run, 2000);
});
