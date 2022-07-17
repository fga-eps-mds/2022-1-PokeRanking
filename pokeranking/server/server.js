/*
*   O express funciona como uma biblioteca de api do node, no qual facilita a criacao de api
*   com as requisicoes e respostas dos metodos GET, POST, PUT e DELETE.
*   
*   O axios exerce a comunicacao com outras APIs, buscando o resultado de res do seu JSON
*/
const axios = require('axios')

const express = require('express')

const app = express()

app.listen('5000')

app.use(express.json())

app.route('/').get( (req, res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')   
        .then(result => res.send(result.data.results))
        .catch(error => console.log(error))     
})