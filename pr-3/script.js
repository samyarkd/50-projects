const closeBtn = document.getElementById("close");
const openBtn = document.getElementById("open");
const container = document.querySelector(".container");

closeBtn.addEventListener("click", () => {
  container.classList.remove("show-nav");
  closeBtn.style.transform = "rotate(90deg)";
  openBtn.style.transform = "rotate(0deg)";
});

openBtn.addEventListener("click", () => {
  container.classList.add("show-nav");
  openBtn.style.transformOrigin = "top left";
  closeBtn.style.transform = "rotate(0deg)";
  openBtn.style.transform = "rotate(90deg)";
});
