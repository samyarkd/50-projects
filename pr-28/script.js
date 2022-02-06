const button = document.getElementById("btn");
const toasts = document.getElementById("toasts");

button.addEventListener("click", showToast);

function showToast() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = "I am a toast";
  toasts.appendChild(notif);
  setTimeout(() => notif.classList.add("show"), 0);

  setTimeout(() => deleteToast(notif), 3000);
}

function deleteToast(notif) {
  notif.classList.remove("show");
  notif.style.marginBottom = '-2.2rem'
  notif.addEventListener("transitionend", () => notif.remove());
}
