import "./style.css";
import { Link } from "react-router-dom";
import { FiltroStatusData } from "./FiltroStatusData"

function FiltroDetalheStatus() {

  return (
    <ul className="bodyFiltroDetalhesStatus">
      <div className="Status">

        {FiltroStatusData.map((item, index) => {
          return (
            <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
              <li key={index} className={item.Cname}>
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}

      </div>
    </ul>
  );
}
  
export default FiltroDetalheStatus;