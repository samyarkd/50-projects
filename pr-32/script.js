const togglers = document.querySelectorAll(".toggle-container input");
const res = document.querySelector(".res span");
const good = document.querySelector(".good input");
const fast = document.querySelector(".fast input");
const cheap = document.querySelector(".cheap input");

togglers.forEach((toggler) => {
  toggler.addEventListener("change", (e) => {
    const toggler = e.target;
    if (good.checked && fast.checked && cheap.checked) {
      if (good === toggler) {
        cheap.checked = false;
        res.innerText = "💲";
      }
      if (fast === toggler) {
        good.checked = false;
        res.innerText = "💩";
      }
      if (cheap === toggler) {
        fast.checked = false;
        res.innerText = "🐌";
      }
    }
  });
});
