import "./style.css";

function FiltroDisplay() {
  return (
    <ul className="bodyFiltro">
      <div className="filtro">
        <div className="boxOrdenaPor">
          <p className="textoOrdena">Ordenar por:</p>
        </div>
        <div className="botaoFiltro">
          <p className="textoFiltro">Tipo</p>
        </div>
        <div className="botaoFiltro">
          <p className="textoFiltro">Status</p>
        </div>
        <div className="botaoFiltro">
          <p className="textoFiltro">Região</p>
        </div>
      </div>
    </ul>
  );
}

export default FiltroDisplay;
