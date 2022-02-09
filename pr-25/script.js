const nav = document.querySelector(".nav");
const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("scroll", (e) => {
  if (wrapper.scrollTop > nav.scrollHeight + 50) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
});
