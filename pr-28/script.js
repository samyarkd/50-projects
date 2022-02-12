const search = document.getElementById("search");

const wrp = document.querySelector(".wrapper");

const prof = document.createElement("div");
prof.classList.add("profile");

async function fetchData(user) {
  const res = await fetch(`https://api.github.com/users/${user}`, {
    method: "GET",
  });
  if (res.status === 200) {
    const data = await res.json();

    prof.innerHTML = `
        <div class="avatar">
            <img src="${data.avatar_url}">
        </div>
        <div class="user-data">
            <span class="name">${data.name}</span>
            <span class="user-name">${data.login}</span>
            <span class="bio">${data.bio}</span>
            <div class="sm-data">
                <span class="followers">Followers : <b>${data.followers}</b></span>
                <span class="followings">Followings : <b>${data.following}</b></span>
                <span class="repos">Repositories : <b>${data.public_repos}</b></span>
            </div>
            <span class="page"><a href="${data.html_url}">Profile Page</a></span>
        </div>
      `;
    wrp.appendChild(prof);
  } else {
    prof.innerHTML = `
    <div>Page Not Found</div>
    `;
    wrp.appendChild(prof);
  }
}

let username = "";
search.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Fetch Data
    username = e.target.value;
    fetchData(username);
  }
});
