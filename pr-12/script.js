const buttons = document.querySelectorAll(".faq-toggle");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const faq = btn.parentElement;
    faq.classList.toggle("active");
  });
});
