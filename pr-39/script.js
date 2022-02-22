const btn = document.querySelector(".container > *:last-child input");
const password = document.getElementById("password");
const img = document.querySelector(".bgb");
btn.addEventListener("click", (e) => {
  e.preventDefault();
});

password.oninput = (e) => {
  let value = e.target.value.length;

  if (value > 8) {
    value = 8;
  } else if (value < 0) {
    value = 0;
  }

  const blur = scale(value, 0, 8, 36, 0);
  img.style.filter = `blur(${blur}px)`;
};

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
