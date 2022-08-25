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
          <p>{pokemonInfo.name}</p>
          <img
                  className="card-image"
                  src={pokemonInfo.url_image}
                  alt={pokemonInfo.name}
          />
        </div>

        <div className="modal-footer">
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
