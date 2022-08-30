import { useEffect, useState } from "react";
import "./style.css";

function PokemonDisplay(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [displaySize, setDisplaySize] = useState(50);

  useEffect(() => {
    fetch("http://localhost:5000/criaturas")
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

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
  );
}

export default PokemonDisplay;
