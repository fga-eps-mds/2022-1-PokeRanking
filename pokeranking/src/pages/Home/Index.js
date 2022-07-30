import React from 'react';
import './style.css';

function Home() {
  const getPokemonUrl = id => `https://localhost:5000/criaturas/${id}`

  const generatePokemonPromises = () => Array(150).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

  const generateHTML = pokemons => pokemons.reduce((accumulator, { name, id, types }) => {
    const elemenTypes = types.map(typeInfo => typeInfo.type.name)

    accumulator += `
        <li class = "card ${elemenTypes[0]}">
            <img class="card-image" alt="${name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg" /> 
            <h2 class = "card-title">${id}. ${name}</h2>
            <p class ="card-subtitle">${elemenTypes.join(' | ')}</p>
        </li>
        `
    return accumulator
  }, '')

  const insetPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="PokeRanking"]')
    ul.innerHTML = pokemons
  }

  const pokemonPromises = generatePokemonPromises()

  Promise.all(pokemonPromises)
    .then(generateHTML)
    .then(insetPokemonsIntoPage)

  return (
    <div class="container">
      <h1>PokeRanking</h1>
      <ul data-js="PokeRanking" class="PokeRanking"></ul>
    </div>
  );
}

export default Home;
