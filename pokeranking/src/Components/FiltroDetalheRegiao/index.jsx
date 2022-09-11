import "./style.css";
import { Link } from "react-router-dom";
import { FiltroRegiaoData } from "./FiltroRegiaoData"


function FiltroDetalheRegiao(props) {
  
    return (
      <ul className="bodyFiltroDetalhesRegiao">
      <div className="Regiao">
        
        {FiltroRegiaoData.map((item, index) => {
          return (
            <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>
              <li key={index} className={item.Cname} onClick= {() => props.alteraRegiao(item.pathAPI)}>
                <span>{item.title}</span>
              </li>
            </Link>
          );
        })}

      </div>
    </ul>
    );
  }

  export default FiltroDetalheRegiao;