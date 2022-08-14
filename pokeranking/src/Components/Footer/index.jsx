import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="row">
        <div className="col">
          <h4>Mapa do site</h4>
          <ul>
            <li>
              <Link className="link" to="/">
                Página inicial
              </Link>
            </li>
            <li>
              <Link className="link" to="ranking">
                Ranking
              </Link>
            </li>
            <li>
              <Link className="link" to="equipe">
                Equipe
              </Link>
            </li>
            <li>
              <Link className="link" to="comparar">
                Comparar
              </Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h4>Sobre</h4>
          <ul>
            <li>
              <Link className="link" to="como-usar">
                Como usar
              </Link>
            </li>
            <li>
              <a
                className="link"
                href="https://fga-eps-mds.github.io/2022-1-PokeRanking/"
              >
                Documentação
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="rights">
        <p>&copy;{new Date().getFullYear()} PokéRanking</p>
      </div>
    </div>
  );
}

export default Footer;
