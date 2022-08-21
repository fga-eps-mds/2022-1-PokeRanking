import LogoDisplay from "../../Components/LogoDisplay";
import FiltroDisplay from "../../Components/FiltroDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";

function Home() {
  return (
    <>
      <LogoDisplay />
      <FiltroDisplay />
      <PokemonDisplay />
    </>
  );
}

export default Home;
