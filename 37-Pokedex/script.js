const pokeContainerElement = document.getElementById('poke-container');

const POKEMON_COUNT = 150;
const BACKGROUND_COLORS = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(BACKGROUND_COLORS);

const fetchPokemons = async () => {
  for (let i = 1; i <= POKEMON_COUNT; i++) {
    const pokemonId = i;
    await getPokemon(pokemonId);
  }
};

const getPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();

  createPokemonCard(data);
};

const createPokemonCard = pokemon => {
  const pokemonElement = document.createElement('div');
  pokemonElement.classList.add('pokemon');

  const id = pokemon.id.toString().padStart(3, '0');
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const types = pokemon.types.map(type => type.type.name);
  const type = mainTypes.find(type => types.indexOf(type) > -1);
  const imageUrl = pokemon.sprites['front_default'];

  const backgroundColor = BACKGROUND_COLORS[type];
  pokemonElement.style.backgroundColor = backgroundColor;

  const pokemonInnerHTML = `
    <div class="img-container">
      <img src="${imageUrl}" alt="${name}">
    </div>
    <div class="info">
      <span class="number">#${id}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span> </small>
    </div>
  `;

  pokemonElement.innerHTML = pokemonInnerHTML;
  pokeContainerElement.appendChild(pokemonElement);
};

fetchPokemons();
