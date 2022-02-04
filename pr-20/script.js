const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", async function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const btnX = e.target.offsetLeft;
    const btnY = e.target.offsetTop;

    const xIn = x - btnX;
    const yIn = y - btnY;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.top = yIn + "px";
    ripple.style.left = xIn + "px";

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 500);
  });
});
