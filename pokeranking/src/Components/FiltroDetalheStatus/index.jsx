import "./style.css";
import { Link } from "react-router-dom";
import { FiltroStatusData } from "./FiltroStatusData"

function FiltroDetalheStatus(props) {

  return (
    <ul className="bodyFiltroDetalhesStatus">
      <div className="Status">

        {FiltroStatusData.map((item, index) => {
          return (
            <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
              <li key={index} className={item.Cname} onClick={() => { props.alteraStatus(item.pathAPI) ; props.setShowElement("") }}>
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