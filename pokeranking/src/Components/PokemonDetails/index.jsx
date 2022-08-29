import { useEffect, useRef } from "react";
import "./style.css";


function PokemonDetails({ opened, setOpened, pokemonInfo }) {
  // const ref = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     console.log(event);
  //     console.log(ref.current && !ref.current.contains(event.target));

  //     if (ref.current && !ref.current.contains(event.target)) {
  //       console.log('FECHA CARALHO')
  //       setOpened(false);
  //     }
  //   };

  //   document.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // });

  if (!opened) return null;

  return (
    <div id="modal-braba" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setOpened(false)}>&times;</span>
       
                        
        </div>
        <div className="modal-body">
          {/* interpolar javascript */}
          <img
                  className="card-image-modal"
                  src={pokemonInfo.url_image}
                  alt={pokemonInfo.name}      
          />
          </div>

          <div className="Info">
          <br/>
          <br/>
          <br/>
          <br/>
          <p className="card-title-number"># {pokemonInfo.codigo}</p>
          <br/>
          <p className="card-title-name">{pokemonInfo.name}</p>
          <br/>
          <p className="card-image-type">{pokemonInfo.type_1}</p>
          </div>
        
        <div className="modal-table1">
        <h2 className="titulo">Status</h2>
        <main className="container">
        <div><button className="bot1">Total</button></div>
        <div><button className="bot1">{pokemonInfo.total}</button></div>
        <div><button className="bot2">HP</button></div>
        <div><button className="bot3">{pokemonInfo.hp}</button></div>
        <div><button className="bot2">Attack</button></div>
        <div><button className="bot3">{pokemonInfo.attack}</button></div>
        <div><button className="bot2">Defense</button></div>
        <div><button className="bot3">{pokemonInfo.defense}</button></div>
        <div><button className="bot2">Sp Attack</button></div>
        <div><button className="bot3">{pokemonInfo.special_attack}</button></div>
        <div><button className="bot2">Sp Defense</button></div>
        <div><button className="bot3">{pokemonInfo.special_defense}</button></div>
        <div><button className="bot2">Speed</button></div>
        <div><button className="bot3">{pokemonInfo.speed}</button></div>
        </main>
        </div>

        <div className="modal-table2">
        <h2 className="titulo">Ranking Geral</h2>
        <main className="container">
        <div><button className="bot1">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        <div><button className="bot4">{pokemonInfo.codigo}</button></div>
        </main>
        </div>

        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
