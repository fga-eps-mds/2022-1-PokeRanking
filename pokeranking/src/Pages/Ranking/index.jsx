import RankingDisplay from "../../Components/RankingDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";

function Ranking(props) {

  return (
    <ul>
      <FiltroDisplay configFiltro={props.configFiltro}/>
      <RankingDisplay tipoSelecionado={props.tipoSelecionado} statusSelecionado={props.statusSelecionado} pokemonName={props.pokemonName}/>
    </ul>
  );

}

export default Ranking;
