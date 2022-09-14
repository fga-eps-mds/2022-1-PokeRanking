import "./style.css";
import menuIcon from "../../Assets/menu.png";

function ComoUsar({ opened, setOpened }) {

  if (!opened) return null;

  return (
    <div id="modal-braba" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => setOpened(false)}>&times;</span>
        </div>
        <div className="texto">
          <p>
            <p style={{ fontWeight: 'bold' }}>Menu superior:</p> <br />
            <img src={menuIcon} alt="Icone do menu" /> : Abre o menu lateral. <br />
            Logo PokeRanking: leva para a página inicial.<br />
            Barra de pesquisa: procura um pokémon pelo nome inserido ou número da pokédex.<br />
          </p>
        </div>
        <div className="texto">
          <p>
            <br />
            <p style={{ fontWeight: 'bold' }}>Menu lateral: </p> <br />
            Home: Leva para a página onde os pokémons estão organizados por número da pokédex. <br />
            Ranking: Leva para o ranking de status geral dos pokémons. <br />
            Equipe: Leva para a página de simulação de equipe. <br />
            Comparar: Leva para a página de comparação entre dois pokémons. <br />
          </p>
        </div>
        <div className="texto">
          <p>
            <br />
            <p style={{ fontWeight: 'bold' }}>Páginas Home e Ranking: </p> <br />
            Card de detalhes: Ao clicar em um pokémon aparece informações mais detalhadas. <br />
            Filtros: Ao clicar nos botões “Ordenar por: …”, aparecerão opções de filtragem de pokémon. <br />
          </p>
        </div>
        <div className="texto">
          <p>
            <br />
            <p style={{ fontWeight: 'bold' }}>Card de detalhes: </p> <br />
            Uma posição do ranking pode pertencer a mais de um pokémon ao mesmo tempo, caso ocorra empate. Porém, na lista do site, os pokémons empatados são organizados por ordem alfabética. <br />
          </p>
        </div>
        <div className="texto">
          <p>
            <br />
            <p style={{ fontWeight: 'bold' }}>Página Equipe: </p> <br />
            Dentro da página Equipe deve-se inserir o nome de seis pokémons que você deseja incluir em uma equipe, a qual será avaliada baseado na soma dos status dos pokémons escolhidos. <br />
          </p>
        </div>
        <div className="texto">
          <p>
            <br />
            <p style={{ fontWeight: 'bold' }}>Página Comparar: </p> <br />
            Dentro da página Comparar deve-se inserir o nome de dois pokémons que você quer comparar. A comparação é baseada nos status dos pokémons e não leva em conta vantagem com relação a tipo. <br />
          </p>
        </div>
      </div>
    </div>
  );

}

export default ComoUsar;