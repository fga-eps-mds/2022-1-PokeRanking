import LogoDisplay from "../../Components/LogoDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";

function Home({configFiltro}) {
  
  return (
    <>
      <LogoDisplay />
      <FiltroDisplay configFiltro={configFiltro}/>
      <PokemonDisplay />
    </>
  );
}

export default Home;
