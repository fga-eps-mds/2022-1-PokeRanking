import { useEffect, useState } from "react";
import "./style.css";

function RankingDisplay({tipoSelecionado, statusSelecionado}) {
  const [pokemonData, setPokemonData] = useState([]);
  let tipo = tipoSelecionado
  let status = statusSelecionado

  useEffect(() => {
    fetch(`http://localhost:5000/criaturas/`+tipo+`/Ranking/`+status)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [tipo, status]);

  return (
    <ul className="PokeRanking">
      {pokemonData.map((pokemon) => {
          const liCss = "card " + pokemon.type_1;
          return (
            <li className={liCss} key={pokemon._id}>
              <p className="card-title number">#{pokemon.codigo}</p>
              <img className="card-image" src={pokemon.url_image} alt={pokemon.name}/>
              <p className="card-title">{pokemon.name}</p>
            </li>
          );
        })
        .slice(0, 721)}
    </ul>
  );
}

export default RankingDisplay;
