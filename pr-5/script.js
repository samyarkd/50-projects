const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let loadingTextPresent = 0;

let inter = setInterval(blurryLoading, 30);

function blurryLoading() {
  loadingTextPresent++;

  if (loadingTextPresent > 99) {
    clearInterval(inter);
  }

  loadingText.innerText = loadingTextPresent + "%";
  let opacityPercent = scale(loadingTextPresent, 0, 100, 1, 0);
  loadingText.style.opacity = opacityPercent;
  bg.style.filter = `blur(${scale(loadingTextPresent, 0, 100, 30, 0)}px)`;
  bg.style.transform = `scale(${scale(loadingTextPresent, 0, 100, 2, 1)})`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
