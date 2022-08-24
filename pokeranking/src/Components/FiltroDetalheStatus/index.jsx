import "./style.css";
import { Link } from "react-router-dom";

function FiltroDetalheStatus() {
  
  return (
    <ul className="bodyFiltroDetalhesStatus">
      <div className="Status">

        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusHP"> Vida </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusAtaque"> Ataque </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusDefesa"> Defesa </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusAtqEspecial"> Atq. Especial </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusDefEspecial"> Def. Especial </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusVelocidade"> Velocidade </div>
        </Link>
        <Link to="/ranking" style={{ textDecoration: 'none' }}>
          <div className="StatusTodos"> Ranking Geral </div>
        </Link>

      </div>
    </ul>
  );
}
  
export default FiltroDetalheStatus;