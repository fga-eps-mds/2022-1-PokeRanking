import "./style.css";

import { useState, useEffect } from "react";

import Card from "../../Components/Card";
import Attribute from "../../Components/Attribute";

function Comparar() {

  const [pokemonData, setPokemonData] = useState([]);
  const [firstPokemon, setFirstPokemon] = useState({});
  const [secondPokemon, setSecondPokemon] = useState({});
  const [compare, setCompare] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/criaturas/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  const verify = () => {
    if (
      Object.keys(firstPokemon).length !== 0 &&
      Object.keys(secondPokemon).length !== 0
    )
      setCompare(true);
  };

  return (
    <div>
      <div style={{ height: "65px" }}></div>
      <div className="comparar-page">
        <div className="card-wraper">
          <Card
            pokemon={setFirstPokemon}
            pokemonData={pokemonData}
            setCompare={setCompare}
            cardName="Primeiro Pokemon"
          />
          <button
            className={
              Object.keys(firstPokemon).length !== 0 &&
              Object.keys(secondPokemon).length !== 0
                ? "comparar-button"
                : "display-none"
            }
            onClick={verify}
          >
            Comparar
          </button>
          <Card
            pokemon={setSecondPokemon}
            pokemonData={pokemonData}
            cardName="Segundo Pokemon"
            setCompare={setCompare}
          />
        </div>
        <Attribute
          firstPokemon={firstPokemon}
          secondPokemon={secondPokemon}
          compare={compare}
        />
      </div>
    </div>
  );
}

export default Comparar;
