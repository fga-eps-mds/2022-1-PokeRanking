import RankingDisplay from "../../Components/RankingDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";

function Ranking(getType) {
  
  return (
    <ul>
      <FiltroDisplay />
      <RankingDisplay />
    </ul>
  );

}

export default Ranking;
