const imgs = document.querySelectorAll(".imgs img");
const btns = document.querySelectorAll(".navigation li");
const colors = ["#2ebe52", "#f6d231", "#00c3ff"];

btns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    btns.forEach((btnR) => {
      btnR.classList.remove("active");
      btnR.style.color = "#fff";
    });
    btn.classList.add("active");
    btn.style.color = colors[idx];

    changeContent(idx);
  });
});

function changeContent(idx) {
  const img = imgs[idx];
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  img.classList.add("active");
}
