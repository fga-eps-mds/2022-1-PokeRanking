import LogoDisplay from "../../Components/LogoDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";

function Home(props) {
  props.configFiltro.alteraFiltro("NA");
  props.configFiltro.alteraStatus("total");

  return (
    <>
      <LogoDisplay />
      <FiltroDisplay configFiltro={props.configFiltro} />
      <PokemonDisplay pokemonName={props.pokemonName} />
    </>
  );
}

export default Home;
