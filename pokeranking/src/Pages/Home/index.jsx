import LogoDisplay from "../../Components/LogoDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";

function Home(props) {
  return (
    <>
      <LogoDisplay />
      <FiltroDisplay />
      <PokemonDisplay pokemonName={props.pokemonName} />
    </>
  );
}

export default Home;
