import { useEffect,useState } from "react";
import "./style.css";
import grass from "../../Assets/Elements/Grass.svg";
import ghost from "../../Assets/Elements/Ghost.svg";
import flying from "../../Assets/Elements/Flying.svg";
import water from "../../Assets/Elements/Water.svg";
import steel from "../../Assets/Elements/Steel.svg";
import fire from "../../Assets/Elements/Fire.svg";
import rock from "../../Assets/Elements/Rock.svg";
import fighting from "../../Assets/Elements/Fighting.svg";
import psychic from "../../Assets/Elements/Psychic.svg";
import fairy from "../../Assets/Elements/Fairy.svg";
import poison from "../../Assets/Elements/Poison.svg";
import electric from "../../Assets/Elements/Electric.svg";
import normal from "../../Assets/Elements/Normal.svg";
import dragon from "../../Assets/Elements/Dragon.svg";
import ice from "../../Assets/Elements/Ice.svg";
import dark from "../../Assets/Elements/Dark.svg";
import ground from "../../Assets/Elements/Ground.svg";
import bug from "../../Assets/Elements/Bug.svg";


const elementsIcons = {
  grass,ghost,flying,water,steel,fire,rock,fighting,psychic,fairy,poison,electric,normal,dragon,ice,dark,ground,bug,
}

function PokemonDetails({ opened, setOpened, pokemonInfo }) {
  const [pokemonDataCard, setPokemonDataCard] = useState(null);


  useEffect(() => {
    if (pokemonInfo){
      fetch(`http://localhost:5000/criaturas/${pokemonInfo.codigo}`)
        .then((response) => response.json())
        .then((data) => {setPokemonDataCard(data[0]); console.log(data[0])});
    }
  }, [pokemonInfo]);

  if (!opened || !pokemonDataCard ) return null; 

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
          <div className="card-modal-types">
            <img
              className="card-modal-element-icon"
              src={elementsIcons[pokemonInfo.type_1]}
              alt={pokemonInfo.type_1}
              title={pokemonInfo.type_1}
            />

            {(pokemonInfo.type_2 && pokemonInfo.type_2 !== 'NA') && (
              <img
                className="card-modal-element-icon" 
                src={elementsIcons[pokemonInfo.type_2]}
                alt={pokemonInfo.type_2}
                title={pokemonInfo.type_2}
              />
            )}
          </div>
        </div>
        
        <div className="modal-table1">
        <h2 className="titulo">Status</h2>
        <div className="linha-horizontal"></div>
        <main className="containerDet">
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
        <div className="linha-vertical"></div>
        <div className="modal-table2">
      
        <h2 className="titulo">Ranking Geral</h2>
        <div className="linha-horizontal"></div>
        <main className="containerDet">
        <div><button className="bot1">{pokemonDataCard.Ranking.colocado_total}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_hp}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_attack}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_defense}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_special_attack}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_special_defense}°</button></div>
        <div><button className="bot4">{pokemonDataCard.Ranking.colocado_speed}°</button></div>
        </main>
        </div>

      </div>
    </div>
  );
}

export default PokemonDetails;
