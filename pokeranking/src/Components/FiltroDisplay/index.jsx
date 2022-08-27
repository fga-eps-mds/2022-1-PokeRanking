import "./style.css";
import { useState } from "react";
import FiltroDetalheTipo from "../FiltroDetalheTipo";
import FiltroDetalheStatus from "../FiltroDetalheStatus";
import FiltroDetalheRegiao from "../FiltroDetalheRegiao";

function FiltroDisplay() {
// Criando constantes para guardar o estado atual de cada filtro.
  const [showElementType, setShowElementType] = useState(false)
  const [showElementStats, setShowElementStats] = useState(false)
  const [showElementRegion, setShowElementRegion] = useState(false)

// Definindo as funcoes que irao mudar o estado atual de cada filtro.
  // Mudar o estado atual do filtro Tipo
  const showOrHideType = () => {
    if (showElementType === false) {
      setShowElementType(true)
      setShowElementStats(false)
      setShowElementRegion(false)
    }
    else setShowElementType(false)
  }
  // Mudar o estado atual do filtro Status
  const showOrHideStats = () => {
    if (showElementStats === false) {
      setShowElementType(false)
      setShowElementStats(true)
      setShowElementRegion(false)
    }
    else setShowElementStats(false)
  }
  // Mudar o estado atual do filtro Regiao
  const showOrHideRegion = () => {
    if (showElementRegion === false) {
      setShowElementType(false)
      setShowElementStats(false)
      setShowElementRegion(true)
    }
    else setShowElementRegion(false)
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
      {showElementType ? <FiltroDetalheTipo /> : null}
      {showElementStats ? <FiltroDetalheStatus /> : null}
      {showElementRegion ? <FiltroDetalheRegiao /> : null}
    </ul>
  );
}

export default FiltroDisplay;
