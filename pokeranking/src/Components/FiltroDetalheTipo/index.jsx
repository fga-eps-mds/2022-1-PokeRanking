import "./style.css";
import { Link } from "react-router-dom";
import { FiltroTipoData } from "./FiltroTipoData"

function FiltroDetalheTipo() {

  return (
    <ul className="bodyFiltroDetalhesTipo">
      <div className="Tipos">
        
        {FiltroTipoData.map((item, index) => {
          return (
            <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
              <li key={index} className={item.Cname}>
                <img src={item.icon} alt={""} />
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}

      </div>
    </ul>
  );
}

export default FiltroDetalheTipo;