const image = document.querySelector(".img");
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = `
                        <div>
                            <span class="circle"></span>
                            <span class="circle"></span>
                        </div>
                   `;

let doubleCLick = false;
image.addEventListener("click", (e) => {
  if (doubleCLick) {
    const x = e.offsetX;
    const y = e.offsetY;
    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;
    image.appendChild(heart);
  }
  doubleCLick = true;
  setTimeout(() => {
    doubleCLick = false;
  }, 200);
});
