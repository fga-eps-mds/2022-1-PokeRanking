import "./style.css";
import { useState } from "react";

function Card(props) {

  const [pokemon, setPokemon] = useState({});
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonExist, setPokemonExist] = useState(false);

  const handlePokemonName = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handleCompare = (e) => {
    e.preventDefault();
    
    props.pokemonData.map((pokemon) => {
      if (pokemon.name == pokemonName) {
        props.pokemon(pokemon);
        setPokemonExist(true);
        setPokemon(pokemon);
      }
    });
  };

  const cardCss = "card " + pokemon.type_1;

  return (
    <>
      {/* card com a barra de pesquisa */}
      <form
        onSubmit={handleCompare}
        className={pokemonExist ? "display-none" : "search-card"}
      >
        <p className="card-name">{props.cardName}</p>
        <div className="input-group">
          <input
            className={pokemonExist ? "display-none" : "search-input"}
            type="text"
            placeholder=" "
            onChange={handlePokemonName}
          />
          <label className="placeholder">Nome do Pokemon</label>
        </div>
        <button className="adicionar-button">Adicionar</button>
      </form>

      {/* card com a imagem do pokemon */}
      <div className={pokemonExist ? cardCss : "display-none"}>
        <p className={pokemonExist ? "card-title number" : "display-none"}>
          #{pokemon.codigo}
        </p>
        <img
          className={pokemonExist ? "card-image" : "display-none"}
          src={pokemon.url_image}
          alt={pokemon.name}
        />
        <p className={pokemonExist ? "card-title" : "display-none"}>
          {pokemon.name}
        </p>
        <button
          className={pokemonExist ? "remover-button" : "display-none"}
          onClick={() => {
            setPokemonExist(false);
            props.setCompare(false);
            props.pokemon({});
          }}
        >
          Remover
        </button>
      </div>
    </>
  );
}

export default Card;
