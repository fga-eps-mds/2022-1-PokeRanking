import LogoDisplay from "../../Components/LogoDisplay";
import PokemonDisplay from "../../Components/PokemonDisplay";
import "./style.css";
import logo from "../../Assets/Logo_Principal.png";

function Home() {
  return (
    <>
      <LogoDisplay />
      <PokemonDisplay />
    </>
  );
}

export default Home;
