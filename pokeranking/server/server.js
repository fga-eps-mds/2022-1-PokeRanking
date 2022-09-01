//configurando modulos
const express = require('express')
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
*   criaturaRoutes = exerce um require do arquivo criaturaRoutes.
*   app.use() = o localhost acessa o arquivo criaturaRoutes
*   com a extensao http://localhost:5000/criaturas  
*/
const criaturaRoutes = require('./routes')

app.use('/criaturas', criaturaRoutes)

module.exports = app