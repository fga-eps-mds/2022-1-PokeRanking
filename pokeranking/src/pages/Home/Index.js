import React from 'react';
import './style.css';

const url = 'http://localhost:5000/criaturas'

fetch(url)
  .then(response => response.json())
  .then(data => {
    const list = document.querySelector('#pokemon');

    data.slice(0, 50).map((item) => {
      const card = document.createElement('li')
      const h2 = document.createElement('span');
      const br = document.createElement('br')
      const id = document.createElement('span');
      const icon = document.createElement('img');
      const tipo_1 = document.createElement('p')
      const tipo_2 = document.createElement('p')

      list.setAttribute('class', "PokeRanking")
      card.setAttribute('class', `card ${item.type_1}`)
      icon.setAttribute('class', "card-image")
      h2.setAttribute('class', "card-title")
      id.setAttribute('class', "card-title")
      tipo_1.setAttribute('class', "card-subtitle")
      tipo_2.setAttribute('class', "card-subtitle")

      id.textContent = `${item.codigo}. `
      icon.src = item.url_image
      h2.textContent = item.name;
      tipo_1.textContent = item.type_1

      if (item.type_2 !== "NA") {
        tipo_2.textContent = item.type_2
      }

      card.appendChild(id);
      card.appendChild(h2);
      card.appendChild(br)
      card.appendChild(icon)
      card.appendChild(tipo_1)
      card.appendChild(tipo_2)

      list.appendChild(card)
    })
  })
  .catch(error => console.log(error))

function Home() {
  return (
    <div class="container" id='container'>
      <h1>PokeRanking</h1>
      <div id="pokemon"></div>
    </div>
  );
}

export default Home;
