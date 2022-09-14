import "./style.css";

import { useState, useEffect } from "react";

import Card from "../../Components/Card";
import Attribute from "../../Components/Attribute";

function CompararAtual() {
  const [pokemonData, setPokemonData] = useState([]);
  const [firstPokemon, setFirstPokemon] = useState({});
  const [secondPokemon, setSecondPokemon] = useState({});
  const [compare, setCompare] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/criaturas/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  return (
    <div className="comparar-page">
      <div className="card-wraper">
        <Card
          pokemon={setFirstPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Primeiro Pokemon"
        />
        <button
          className="comparar-button"
          onClick={() => {
            if (
              Object.keys(firstPokemon).length !== 0 &&
              Object.keys(secondPokemon).length !== 0
            )
              setCompare(true);
          }}
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
      {/* <button
        className="comparar-button"
        onClick={() => {
          if (
            Object.keys(firstPokemon).length !== 0 &&
            Object.keys(secondPokemon).length !== 0
          )
            setCompare(true);
        }}
      >
        Comparar
      </button> */}
    </div>
  );
}

export default CompararAtual;
