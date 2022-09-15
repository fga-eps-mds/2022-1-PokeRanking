import { useEffect, useState } from "react";
import "./style.css";
import PokemonDetails from "../PokemonDetails";
import medalhaBronze from "../../Assets/Medals/MedalhaBronze2.png"
import medalhaPrata from "../../Assets/Medals/MedalhaPrata2.png"
import medalhaOuro from "../../Assets/Medals/MedalhaOuro2.png"

function RankingDisplay(props) {
  const [pokemonData, setPokemonData] = useState([]);
  const [displaySize, setDisplaySize] = useState(50);
  const [modalOpened, setModalOpened] = useState(false);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  let tipo = props.tipoSelecionado
  let status = props.statusSelecionado
  let regiao = props.regiaoSelecionada
  let contador = 0
  var liCss, isFirst, isSecond, isThird

  useEffect(() => {
    fetch(`http://localhost:5000/criaturas/`+tipo+`/Ranking/`+status+`/Geracao/`+regiao)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [tipo, status, regiao]);

  function handlePokemonClick(data) {
    setModalOpened(true);
    setPokemonInfo(data);
  }

  const pokemonDataFilter = pokemonData.filter(
    (e) =>
      e.name.startsWith(props.pokemonName.toLowerCase()) ||
      // eslint-disable-next-line eqeqeq
      e.codigo == props.pokemonName
  );

  return (
    <>
      <PokemonDetails opened={modalOpened} setOpened={setModalOpened} pokemonInfo={pokemonInfo} />
      
      <div className="display-container">
        
        <ul className="PokeRanking">
          {pokemonDataFilter
            .map((pokemon) => {
              switch (contador) {
                case 0:
                    liCss = "cardPrimeiro " + pokemon.type_1;
                    isFirst = true
                  break;
                case 1:
                    liCss = "cardSegundo " + pokemon.type_1;
                    isFirst = false
                    isSecond = true
                  break;
                case 2:
                    liCss = "cardTerceiro " + pokemon.type_1;
                    isSecond = false
                    isThird = true
                  break;
                default:
                    liCss = "card " + pokemon.type_1;
                    isFirst = false
                    isSecond = false
                    isThird = false
                  break;
              }
              contador++

              return (
                <li className={liCss} key={pokemon._id} onClick={() => handlePokemonClick(pokemon)}>
                  {isFirst ? <img className="medal" src={medalhaOuro} alt={pokemon.name} style={{top: "0px", left: "10px"}}/> : null}
                  {isSecond ? <img className="medal" src={medalhaPrata} alt={pokemon.name} style={{top: "0px", left: "10px"}}/> : null}
                  {isThird ? <img className="medal" src={medalhaBronze} alt={pokemon.name} style={{top: "0px", left: "10px"}}/> : null}
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
    </>
  );
}

export default RankingDisplay;
