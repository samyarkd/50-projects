const poke_container = document.getElementById("poke-container");
const poke_count = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const fetchPokemons = async () => {
  for (let i = 1; i < poke_count; i++) {
    await getPokemons(i);
  }
};

const getPokemons = async (i) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
};

const main_types = Object.keys(colors);

function createPokemonCard(pokemon) {
  const pokemonL = document.createElement("div");
  pokemonL.classList.add("pokemon");

  const pokemonId = pokemon.id.toString().padStart(3, "0");
  const poke_types = pokemon.types.map((type) => type.type.name);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colors[type];

  pokemonL.style.backgroundColor = color;
  pokemonL.style.boxShadow = `0 0 10px ${color}`;
  let pokemonInnerHTML = `
  <div class="image-container">
  <img
  src="${pokemon.sprites.front_default}"
  />
  </div>
  <div class="info">
  <span class="number">#${pokemonId}</span>
  <h3 class="name">${pokemon.name}</h3>
  <small class="type">Type: <span>${type}</span></small>
  </div>
  `;

  pokemonL.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonL);
}

fetchPokemons();
