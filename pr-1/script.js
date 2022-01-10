const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    const style = panel.currentStyle || window.getComputedStyle(panel, false);
    const bi = style.backgroundImage;

    document.querySelector(".bg-image").style.backgroundImage = bi;
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
