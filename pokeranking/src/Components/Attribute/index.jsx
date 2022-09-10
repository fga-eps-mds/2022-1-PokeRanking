import "./style.css";

function Attribute(props) {
  const attribute = [
    {
      name: "Total",
      valueFirstPokemon: props.firstPokemon.total,
      valueSecondPokemon: props.secondPokemon.total,
      barPercentage:
        (props.firstPokemon.total /
          (props.firstPokemon.total + props.secondPokemon.total)) *
        100,
      key: 0,
    },
    {
      name: "HP",
      valueFirstPokemon: props.firstPokemon.hp,
      valueSecondPokemon: props.secondPokemon.hp,
      barPercentage:
        (props.firstPokemon.hp /
          (props.firstPokemon.hp + props.secondPokemon.hp)) *
        100,
      key: 1,
    },
    {
      name: "Attack",
      valueFirstPokemon: props.firstPokemon.attack,
      valueSecondPokemon: props.secondPokemon.attack,
      barPercentage:
        (props.firstPokemon.attack /
          (props.firstPokemon.attack + props.secondPokemon.attack)) *
        100,
      key: 2,
    },
    {
      name: "Defense",
      valueFirstPokemon: props.firstPokemon.defense,
      valueSecondPokemon: props.secondPokemon.defense,
      barPercentage:
        (props.firstPokemon.defense /
          (props.firstPokemon.defense + props.secondPokemon.defense)) *
        100,
      key: 3,
    },
    {
      name: "Sp Attack",
      valueFirstPokemon: props.firstPokemon.special_attack,
      valueSecondPokemon: props.secondPokemon.special_attack,
      barPercentage:
        (props.firstPokemon.special_attack /
          (props.firstPokemon.special_attack +
            props.secondPokemon.special_attack)) *
        100,
      key: 4,
    },
    {
      name: "Sp Defense",
      valueFirstPokemon: props.firstPokemon.special_defense,
      valueSecondPokemon: props.secondPokemon.special_defense,
      barPercentage:
        (props.firstPokemon.special_defense /
          (props.firstPokemon.special_defense +
            props.secondPokemon.special_defense)) *
        100,
      key: 5,
    },
    {
      name: "Speed",
      valueFirstPokemon: props.firstPokemon.speed,
      valueSecondPokemon: props.secondPokemon.speed,
      barPercentage:
        (props.firstPokemon.speed /
          (props.firstPokemon.speed + props.secondPokemon.speed)) *
        100,
      key: 6,
    },
  ];

  return (
    <ul className={props.compare ? "attribute-wraper" : "display-none"}>
      {attribute.map((item) => {
        return (
          <li className="attribute-line" key={item.key}>
            <p className="attribute-name">{item.name}</p>
            <p className="attribute-value">{item.valueFirstPokemon}</p>
            <p
              className="percentage-bar"
              style={{
                background: "rgb(59, 157, 122)",
                background: `linear-gradient(90deg, rgba(59,157,122,1) ${item.barPercentage}%, rgba(127,51,192,1) ${item.barPercentage}%)`,
              }}
            ></p>
            <p className="attribute-value">{item.valueSecondPokemon}</p>
            <p className="attribute-name">{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Attribute;
