import { useEffect, useState } from "react";
import "./style.css";
import PokemonDetails from "../PokemonDetails";

<<<<<<< HEAD
function PokemonDisplay() {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);
=======
function PokemonDisplay(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [displaySize, setDisplaySize] = useState(50);
>>>>>>> origin/main

  useEffect(() => {
    fetch("http://localhost:5000/criaturas")
      .then((response) => response.json())
      .then((data) => {setPokemonData(data); console.log(data)});
  }, []);

<<<<<<< HEAD
  function handlePokemonClick(data) {
    setModalOpened(true);
    setPokemonInfo(data);
  }

  return (
    <>
      <PokemonDetails opened={modalOpened} setOpened={setModalOpened} pokemonInfo={pokemonInfo} />
      
      <ul className="PokeRanking">
        {pokemonData
          .map((pokemon) => {
            const liCss = "card " + pokemon.type_1;
            return (
              <li className={liCss} key={pokemon._id} onClick={() => handlePokemonClick(pokemon)}>
=======
  const pokemonDataFilter = pokemonData.filter(
    (e) =>
      e.name.startsWith(props.pokemonName.toLowerCase()) ||
      e.codigo == props.pokemonName
  );

  return (
    <div className="display-container">
      <ul className="PokeRanking">
        {pokemonDataFilter
          .map((pokemon) => {
            const liCss = "card " + pokemon.type_1;
            return (
              <li className={liCss} key={pokemon._id}>
>>>>>>> origin/main
                <p className="card-title number">#{pokemon.codigo}</p>
                <img
                  className="card-image"
                  src={pokemon.url_image}
                  alt={pokemon.name}
                />
                <p className="card-title">{pokemon.name}</p>
              </li>
            );
          })
<<<<<<< HEAD
          .slice(0, 721)}
      </ul>
    </>
=======
          .slice(0, displaySize)}
      </ul>
      <div className="show-more-container">
        <button
          className="show-more"
          onClick={() => setDisplaySize(displaySize + 50)}
        >
          MOSTRAR MAIS
        </button>
      </div>
    </div>
>>>>>>> origin/main
  );
}

export default PokemonDisplay;
