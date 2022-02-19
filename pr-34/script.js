const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const final = document.querySelector(".final");
const replay = document.getElementById("replay");

runAnimation();

replay.addEventListener("click", () => {
  nums.forEach((num, idx) => {
    if (idx === 0) {
      num.classList.add("in");
      num.classList.remove("out");
    } else {
      num.classList.remove("out");
      num.classList.remove("in");
    }
  });
  counter.classList.remove("hide");
  final.classList.remove("show");
  runAnimation();
});

function runAnimation() {
  nums.forEach((num, idx) => {
    const nextToLast = num.length - 1;
    num.addEventListener("animationend", (e) => {
      if (e.animationName === "goIn" && idx !== nextToLast) {
        num.classList.remove("in");
        num.classList.add("out");
      } else if (e.animationName === "goOut" && num.nextElementSibling) {
        num.classList.remove("out");
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        final.classList.add("show");
      }
    });
  });
}
