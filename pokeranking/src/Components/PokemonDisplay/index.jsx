import { useEffect, useState } from "react";
import "./style.css";
import PokemonDetails from "../PokemonDetails";

function PokemonDisplay() {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/criaturas")
      .then((response) => response.json())
      .then((data) => {setPokemonData(data); console.log(data)});
  }, []);

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
          .slice(0, 721)}
      </ul>
    </>
  );
}

export default PokemonDisplay;
