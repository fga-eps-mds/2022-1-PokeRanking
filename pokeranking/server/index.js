//configurando modulos
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

//middlewares -> permite enviar e receber arquivos JSON na API
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//CORS -> versiona o funcionamento de acesso da API
app.use((req, res, next) => {

    /*
    *  Access-Control-Allow-Origin -> determina a url(frontend) que pode se comunicar com a API.
    *  Access-Control-Allow-Methods -> determina o metodo HTTP que a url pode utilizar
    *  na aplicacao
    */
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET')
    app.use(cors());
    next();
})

//Rotas da API

/*
*   criaturaRoutes = exerce um require da page criaturaRoutes.
*   app.use() = o localhost acessa essa page (criaturaRoutes) 
*   com a extensao localhost ... /criaturas  
*/
const criaturaRoutes = require('./routes/criaturaRoutes')

app.use('/criaturas', criaturaRoutes)

//Configuracao de porta de servidor e Banco de Dados

const url="mongodb+srv://BD_PokeRanking:mds_pokeranking@cluster0.r9fs24d.mongodb.net/Pokémons?retryWrites=true&w=majority"

mongoose.connect(url)
.then(() => {
    console.log("MongoDB conectado")
    app.listen(5000, () => console.log("Rodando servidor ..."))
})
.catch((erro) => {
    console.log("erro : " + erro)
})