import "./style.css";
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
import AttributeEquipe from "../../Components/AttributeEquipe";

function Equipe() {
  const [pokemonData, setPokemonData] = useState([]);
  const [firstPokemon, setFirstPokemon] = useState({});
  const [secondPokemon, setSecondPokemon] = useState({});
  const [thirdPokemon, setThirdPokemon] = useState({});
  const [fourthPokemon, setFourthPokemon] = useState({});
  const [fifthPokemon, setFifthPokemon] = useState({});
  const [sixthPokemon, setSixthPokemon] = useState({});
  const [compare, setCompare] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/criaturas/`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, []);

  return (
    <div className="equipe-page">
      <div className="pokemon-column">
        <Card
          pokemon={setFirstPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Primeiro Pokemon"
        />
        <Card
          pokemon={setSecondPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Segundo Pokemon"
        />
        <Card
          pokemon={setThirdPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Terceiro Pokemon"
        />
      </div>
      <AttributeEquipe
        firstPokemon={firstPokemon}
        secondPokemon={secondPokemon}
        thirdPokemon={thirdPokemon}
        fourthPokemon={fourthPokemon}
        fifthPokemon={fifthPokemon}
        sixthPokemon={sixthPokemon}
        compare={compare}
      />
      <div className="pokemon-column">
        <Card
          pokemon={setFourthPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Quarto Pokemon"
        />
        <Card
          pokemon={setFifthPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Quinto Pokemon"
        />
        <Card
          pokemon={setSixthPokemon}
          pokemonData={pokemonData}
          setCompare={setCompare}
          cardName="Sexto Pokemon"
        />
      </div>
    </div>
  );
}

export default Equipe;
