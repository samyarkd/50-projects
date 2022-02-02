const body = document.body;
const slides = document.querySelectorAll(".slide");
const left = document.querySelector(".left-arrow");
const right = document.querySelector(".right-arrow");

let activeCLass = 0;
setBodyBg();

left.addEventListener("click", () => {
  activeCLass++;

  if (activeCLass > slides.length - 1) {
    activeCLass = 0;
  }

  setBodyBg();
  setOverlyImage();
});

right.addEventListener("click", () => {
  activeCLass--;
  if (activeCLass < 0) {
    activeCLass = slides.length - 1;
  }
  setBodyBg();
  setOverlyImage();
});

function setBodyBg() {
  body.style.backgroundImage = slides[activeCLass].style.backgroundImage;
}

function setOverlyImage() {
  slides.forEach((slide, idx) => {
    if (idx === activeCLass) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
