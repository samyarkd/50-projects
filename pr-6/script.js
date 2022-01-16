const boxList = document.querySelectorAll(".content");

window.addEventListener("scroll", boxCheck);

boxCheck();

function boxCheck() {
  const triggerBottom = window.innerHeight - 100;

  boxList.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
