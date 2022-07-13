const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=90'

function getNames(){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('#pokemon');

            data.results.map((item) => {
                const card = document.createElement('div')
                const h2 = document.createElement('h2');
                const id = document.createElement('p');
                const icon = document.createElement('img');

                fetch(item.url)
                    .then(response => response.json())
                    .then(data => {
                        h2.setAttribute('id', data.id)
                        id.textContent = `# ${data.id}`
                        icon.src = data.sprites.front_default   
                    })
                
                h2.textContent = item.name;
                card.appendChild(h2);
                card.appendChild(id);
                card.appendChild(icon)

                list.appendChild(card)
            })
        })
        .catch(error => console.log(error))
}

getNames()