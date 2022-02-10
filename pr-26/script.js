const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
slideRight.style.top = `-${0 * 100}vh`;

downButton.addEventListener("click", () => {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesLength - 1;
  }
  slideLeft.style.top = `-${(slidesLength - (activeSlideIndex + 1)) * 100}vh`;
  slideRight.style.top = `-${activeSlideIndex * 100}vh`;
});

upButton.addEventListener("click", () => {
  activeSlideIndex++;
  if (activeSlideIndex > slidesLength - 1) {
    activeSlideIndex = 0;
  }
  slideLeft.style.top = `-${(slidesLength - (activeSlideIndex + 1)) * 100}vh`;
  slideRight.style.top = `-${activeSlideIndex * 100}vh`;
});