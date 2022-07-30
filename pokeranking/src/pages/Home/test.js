import React from 'react';
import './style.css';

function Home() {
  const url = 'http://localhost:5000/criaturas'

  fetch(url)
  .then(response => response.json())
  .then(data => {
      const list = document.querySelector('#pokemon');

      data.map((item) => {
          const card = document.createElement('div')
          const h2 = document.createElement('h2');
          const id = document.createElement('p');
          const icon = document.createElement('img');

          card.setAttribute('class', item.type_1)
          icon.setAttribute('class', "card-image")
          
          h2.setAttribute('id', item.codigo)
          id.textContent = `# ${item.codigo}`
          icon.src = item.url_image      
          h2.textContent = item.name;
          card.appendChild(h2);
          card.appendChild(id);
          card.appendChild(icon)

          list.appendChild(card)
      })
  })
  .catch(error => console.log(error))

  return (
    <div class="container" id='container'>
      <h1>PokeRanking</h1>
      <div id="pokemon"></div>
    </div>
  );
}

export default Home;
