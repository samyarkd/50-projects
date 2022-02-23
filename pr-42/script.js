const users = document.getElementById("users");
const search = document.getElementById("search");
const loading = document.getElementById("loading");
const listItems = [];
let filteredItems = false;
const url = "https://randomuser.me/api?results=100";

getData();
async function getData() {
  const res = await fetch(url);
  const { results } = await res.json();

  results.forEach((user) => {
    const firstName = user.name.first;
    const avatar = user.picture.large;
    const location =
      user.location.city +
      " " +
      user.location.state +
      " " +
      user.location.country;

    const user_info = {
      firstName,
      avatar,
      location,
    };

    listItems.push(user_info);

    const userEl = document.createElement("div");
    userEl.classList.add("user");
    userEl.innerHTML = `
        <img
          src="${user_info.avatar}"
        />
        <div class="info">
          <h3>${user_info.firstName}</h3>
          <div class="span">${user_info.location}</div>
        </div>
    `;

    users.appendChild(userEl);
  });

  loading.remove();
}

search.addEventListener("input", (e) => {
  filteredItems = listItems.filter(
    (user) =>
      user.firstName.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1 ||
      user.location.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
  );
  users.innerHTML = "";
  for (let i = 0; i < filteredItems.length; i++) {
    const user = filteredItems[i];
    const userEl = document.createElement("div");
    userEl.classList.add("user");
    userEl.innerHTML = `
        <img
          src="${user.avatar}"
        />
        <div class="info">
          <h3>${user.firstName}</h3>
          <div class="span">${user.location}</div>
        </div>
    `;

    users.appendChild(userEl);
  }
});
