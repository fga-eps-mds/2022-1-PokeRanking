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
          <p className="textoOrdena">Ordenar por:</p>
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

/*
import "./style.css";
import useCollapse from 'react-collapsed';
import FiltroDetalheTipo from "../FiltroDetalheTipo";
import FiltroDetalheStatus from "../FiltroDetalheStatus";
import FiltroDetalheRegiao from "../FiltroDetalheRegiao";

function FiltroDisplay() {
// Criando constantes para guardar o estado atual de cada filtro.

// Retorno da funcao
  return (
    <ul className="bodyFiltro">
      <div className="filtro">

        <div className="boxOrdenaPor">
          <p className="textoOrdena">Ordenar por:</p>
        </div>

      </div>

      <TipoDisplay />
      <StatsDisplay />
      <RegionDisplay />

    </ul>
  );
}

function TipoDisplay() {
  // Criando constantes para guardar o estado atual de cada filtro.
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  // Retorno da funcao
    return (
      <ul>

        <div className="filtro">
          <div className="botaoFiltro" {...getToggleProps()}>
            {isExpanded ? 'Tipo' : 'Tipo'}
          </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="bodyFiltroDetalhesTipo">
            <FiltroDetalheTipo />
          </div>
        </div>
        
      </ul>
    );
}

function StatsDisplay() {
  // Criando constantes para guardar o estado atual de cada filtro.
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  // Retorno da funcao
    return (
      <ul>

        <div className="filtro">
          <div className="botaoFiltro" {...getToggleProps()}>
            {isExpanded ? 'Status' : 'Status'}
          </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="bodyFiltroDetalhesStatus">
            <FiltroDetalheStatus />
          </div>
        </div> 

      </ul>
    );
}

function RegionDisplay() {
  // Criando constantes para guardar o estado atual de cada filtro.
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  
  // Retorno da funcao
    return (
      <ul>
        
        <div className="filtro">
          <div className="botaoFiltro" {...getToggleProps()}>
            {isExpanded ? 'Regiao' : 'Regiao'}
          </div>
        </div>
        <div {...getCollapseProps()}>
          <div className="bodyFiltroDetalhesRegiao">
            <FiltroDetalheRegiao />
          </div>
        </div>
        
      </ul>
    );
}

export default FiltroDisplay;
*/
