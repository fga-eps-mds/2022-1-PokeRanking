import { Link } from "react-router-dom";
import "./style.css";
import { useState } from "react";
import ComoUsar from "../ComoUsar";
import Mapa from "../Mapa";

function Footer() {
  const [modalOpened, setModalOpened] = useState(false);

  function handleComoUsarClick() {
    setModalOpened(true);
  }

  function handleMapaClick() {
    setModalOpened(true);
  }
  
  return (
    <>
    <ComoUsar 
      opened={modalOpened}
      setOpened={setModalOpened}
    />
    <Mapa 
      opened={modalOpened}
      setOpened={setModalOpened}
    />
    
    <div className="main-footer">
      <div className="row">
        <div className="col">
          <h4 className="footer-title">Mapa do site</h4>
          <div className="container-link">
            <Link className="link" to="/">
              Página inicial
            </Link>
            <Link className="link" to="ranking">
              Ranking
            </Link>
            <Link className="link" to="equipe">
              Equipe
            </Link>
            <Link className="link" to="comparar">
              Comparar
            </Link>
          </div>
        </div>
        <div className="col">
          <h4 className="footer-title">Sobre</h4>
          <div className="container-link">
            <div className="link" onClick={handleComoUsarClick}>
              Como usar
            </div>
            <div className="link" onClick={handleMapaClick}>
              Mapa de regiões Pokémon
            </div>
            <a
              className="link"
              href="https://fga-eps-mds.github.io/2022-1-PokeRanking/"
            >
              Documentação
            </a>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="rights">
        <p>&copy;{new Date().getFullYear()} PokéRanking</p>
      </div>
    </div>
    </>
  );
}

export default Footer;
