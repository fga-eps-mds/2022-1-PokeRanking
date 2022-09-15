import "./style.css";

function AttributeEquipe(props) {
  const total =
    props.firstPokemon.total +
    props.secondPokemon.total +
    props.thirdPokemon.total +
    props.fourthPokemon.total +
    props.fifthPokemon.total +
    props.sixthPokemon.total;

  const totalHP =
    props.firstPokemon.hp +
    props.secondPokemon.hp +
    props.thirdPokemon.hp +
    props.fourthPokemon.hp +
    props.fifthPokemon.hp +
    props.sixthPokemon.hp;

  const totalAttack =
    props.firstPokemon.attack +
    props.secondPokemon.attack +
    props.thirdPokemon.attack +
    props.fourthPokemon.attack +
    props.fifthPokemon.attack +
    props.sixthPokemon.attack;

  const totalDefense =
    props.firstPokemon.defense +
    props.secondPokemon.defense +
    props.thirdPokemon.defense +
    props.fourthPokemon.defense +
    props.fifthPokemon.defense +
    props.sixthPokemon.defense;

  const totalSpAttack =
    props.firstPokemon.special_attack +
    props.secondPokemon.special_attack +
    props.thirdPokemon.special_attack +
    props.fourthPokemon.special_attack +
    props.fifthPokemon.special_attack +
    props.sixthPokemon.special_attack;

  const totalSpDefense =
    props.firstPokemon.special_defense +
    props.secondPokemon.special_defense +
    props.thirdPokemon.special_defense +
    props.fourthPokemon.special_defense +
    props.fifthPokemon.special_defense +
    props.sixthPokemon.special_defense;

  const totalSpeed =
    props.firstPokemon.speed +
    props.secondPokemon.speed +
    props.thirdPokemon.speed +
    props.fourthPokemon.speed +
    props.fifthPokemon.speed +
    props.sixthPokemon.speed;

  const attribute = [
    {
      name: "Total",
      total: total,
      teamClassification: (total / (720 * 6)) * 100,
      key: 0,
    },
    {
      name: "HP",
      total: totalHP,
      teamClassification: (totalHP / (255 * 6)) * 100,
      key: 1,
    },
    {
      name: "Attack",
      total: totalAttack,
      teamClassification: (totalAttack / (165 * 6)) * 100,
      key: 2,
    },
    {
      name: "Defense",
      total: totalDefense,
      teamClassification: (totalDefense / (230 * 6)) * 100,
      key: 3,
    },
    {
      name: "Sp Attack",
      total: totalSpAttack,
      teamClassification: (totalSpAttack / (154 * 6)) * 100,
      key: 4,
    },
    {
      name: "Sp Defense",
      total: totalSpDefense,
      teamClassification: (totalSpDefense / (230 * 6)) * 100,
      key: 5,
    },
    {
      name: "Speed",
      total: totalSpeed,
      teamClassification: (totalSpeed / (160 * 6)) * 100,
      key: 6,
    },
  ];
  return (
    <ul
      className={
        Object.keys(props.firstPokemon).length !== 0 &&
        Object.keys(props.secondPokemon).length !== 0 &&
        Object.keys(props.thirdPokemon).length !== 0 &&
        Object.keys(props.fourthPokemon).length !== 0 &&
        Object.keys(props.fifthPokemon).length !== 0 &&
        Object.keys(props.sixthPokemon).length !== 0
          ? "attribute-wraper-equipe"
          : "display-none"
      }
    >
      {attribute.map((item) => {
        return (
          <li className="attribute-line-equipe" key={item.key}>
            <p className="attribute-name" style={{ width: "200px" }}>
              {item.name}
            </p>
            <p className="attribute-value">{item.total}</p>
            <p
              className="percentage-bar percentage-bar-equipe"
              style={{
                width: "795px",
                background: "rgb(59,157,122)",
                background: `linear-gradient(90deg, rgba(59,157,122,1) ${item.teamClassification}%, rgb(167, 167, 167) ${item.teamClassification}%)`,
              }}
            >
              <p className="percentage">FRACA</p>
              <p className="percentage">MEDIA</p>
              <p className="percentage">FORTE</p>
              <p className="percentage" style={{ border: "none" }}>
                INCRIVEL
              </p>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default AttributeEquipe;
