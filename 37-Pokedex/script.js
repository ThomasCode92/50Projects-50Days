const pokeContainerElement = document.getElementById('poke-container');

const POKEMON_COUNT = 150;
const COLORS = {
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

  console.log(data);
};

fetchPokemons();
