import "./style.css";
import { useState } from "react";
import FiltroDetalheTipo from "../FiltroDetalheTipo";
import FiltroDetalheStatus from "../FiltroDetalheStatus";
import FiltroDetalheRegiao from "../FiltroDetalheRegiao";

function FiltroDisplay({configFiltro}) {
// Criando constantes para guardar o estado atual de cada filtro.
  const [showElement, setShowElement] = useState("")

// Definindo as funcoes que irao mudar o estado atual de cada filtro.
  // Mudar o estado atual do filtro Tipo
  const showOrHideType = () => {
    if (showElement !== "tipo") setShowElement("tipo")
    else setShowElement("")
  }
  // Mudar o estado atual do filtro Status
  const showOrHideStats = () => {
    if (showElement !== "status") setShowElement("status")
    else setShowElement("")
  }
  // Mudar o estado atual do filtro Regiao
  const showOrHideRegion = () => {
    if (showElement !== "regiao") setShowElement("regiao")
    else setShowElement("")
  }

// Retorno da funcao
  return (
    <ul className="bodyFiltro">
      <div className="filtro">

        <div className="boxOrdenaPor">
          <p>Ordenar por:</p>
        </div>

        <button className="botaoFiltro" onClick={showOrHideType}>
          <p className="textoFiltro">Tipo</p>
        </button>

        <button className="botaoFiltro" onClick={showOrHideStats}>
          <p className="textoFiltro">Status</p>
        </button>

        <button className="botaoFiltro" onClick={showOrHideRegion}>
          <p className="textoFiltro">Região</p>
        </button>

      </div>
      {showElement==="tipo" ? <FiltroDetalheTipo alteraFiltro={configFiltro.alteraFiltro}/> : null}
      {showElement==="status" ? <FiltroDetalheStatus alteraStatus={configFiltro.alteraStatus}/> : null}
      {showElement==="regiao" ? <FiltroDetalheRegiao /> : null}
    </ul>
  );
}

export default FiltroDisplay;
