import LogoDisplay from "../../Components/LogoDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";

function Home({configFiltro}, props) {
  
  configFiltro.alteraFiltro("NA")
  configFiltro.alteraStatus("total")

  return (
    <>
      <LogoDisplay />
      <FiltroDisplay configFiltro={configFiltro}/>
      <PokemonDisplay pokemonName={props.pokemonName}/>
    </>
  );
}

export default Home;
