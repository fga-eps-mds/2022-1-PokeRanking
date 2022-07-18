//configurando modulos
const express = require('express')
const mongoose = require('mongoose')
const app = express()

//middlewares -> permite enviar e receber arquivos JSON na API
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

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