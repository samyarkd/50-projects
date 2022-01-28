const API_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=cc293bf4d0fddf8b78703d779b63e2fe&sort_by="popularity.desc&page=1';

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=cc293bf4d0fddf8b78703d779b63e2fe&page=1&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
//   get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    let movieEL = document.createElement("div");
    movieEL.classList.add("movie");
    movieEL.innerHTML = `
            <img src="${IMG_PATH + poster_path}"> 
            <div class="movie-info">
                <h2>${title}</h2>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>  
            <div class="movie-dec">
                <h3>${title}</h3>
                <p>
                    ${overview}
                </p>
            </div>
        
      `;
    main.appendChild(movieEL);
  });
}

function getClassByRate(rate) {
  if (rate >= 8) {
    return "green";
  } else if (rate >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search;
  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm.value);
    search.value = "";
  }
});
