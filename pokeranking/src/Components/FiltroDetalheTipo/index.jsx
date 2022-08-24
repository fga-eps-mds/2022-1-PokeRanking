import "./style.css";
import { Link } from "react-router-dom";

function FiltroDetalheTipo() {
  
  return (
    <ul className="bodyFiltroDetalhesTipo">
      <div className="Tipos">

        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoSteel"> Ferro </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoFire"> Fogo </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoGrass"> Grama </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoEletric"> Elétrico </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoWater"> Água </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoIce"> Gelo </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoGround"> Terra </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoRock"> Pedra </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoFairy"> Fada </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoPoison"> Veneno </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoBug"> Inseto </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoDragon"> Dragão </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoPsychic"> Psíquico </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoFlying"> Voador </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoFighting"> Lutador </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoGhost"> Fantasma </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoDark"> Sombrio </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoNormal"> Normal </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="cardTipoTodos"> Todos os tipos </div>
        </Link>

      </div>
    </ul>
  );
}
  
export default FiltroDetalheTipo;