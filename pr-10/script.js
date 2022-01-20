const btn = document.getElementById("jokeBtn");
const joke = document.getElementById("joke");

joke.innerHTML = `<span style="color: #ddd;">loading</span>`;

getJoke();

btn.addEventListener("click", () => {
  getJoke();
});

async function getJoke() {
  joke.innerHTML = `<span style="color: #ddd;">loading</span>`;
  const res = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  const data = await res.json();
  joke.innerText = data.joke;
}
