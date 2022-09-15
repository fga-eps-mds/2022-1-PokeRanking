import "./style.css";
import mapa from "../../Assets/mapa.gif";

function Mapa({ opened, setOpened }) {

  if (!opened) return null;

  return (
    <div id="modal-map" className="modal">
      <div className="modal-content-map">
        <div className="modal-header">
          <span className="close" onClick={() => setOpened(false)}>&times;</span>
        </div>
        <div className="texto">
          <p>
            <p style={{ fontWeight: 'bold' }}><center>Mapa de regiões Pokémon:</center></p> <br />
            <p><center>As regiões de Pokémon são divididas em 8 gerações, cada uma com suas características únicas. A primeira geração foi lançada em 1996, e a última em 2019. Cada geração possui Pokémons diferentes, sendo que a primeira geração possui 151 Pokémon, a segunda possui 100, a terceira possui 135, a quarta possui 107, a quinta possui 156, a sexta possui 72, a sétima possui 88 e a oitava possui 89.</center></p> <br />
            <p><center>No PokéRanking, contamos atualmente com as 6 primeiras gerações. Confira as regiões referentes a cada uma!</center></p><br />

            <center><img src={mapa} alt="mapa" /></center> <br />
            
          </p>
        </div>
        
        
      </div>
    </div>
  );

}

export default Mapa;