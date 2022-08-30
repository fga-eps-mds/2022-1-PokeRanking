import RankingDisplay from "../../Components/RankingDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";

function Ranking({configFiltro, tipoSelecionado, statusSelecionado}) {

  return (
    <ul>
      <FiltroDisplay configFiltro={configFiltro}/>
      <RankingDisplay tipoSelecionado={tipoSelecionado} statusSelecionado={statusSelecionado}/>
    </ul>
  );

}

export default Ranking;
