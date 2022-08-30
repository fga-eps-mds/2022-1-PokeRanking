const app = require('./server')
const mongoose = require('mongoose')

//Configuracao de porta de servidor e Banco de Dados

const url="mongodb+srv://BD_PokeRanking:mds_pokeranking@cluster0.r9fs24d.mongodb.net/Pokémons?retryWrites=true&w=majority"

mongoose.connect(url)
.then(() => {
    console.log("MongoDB conectado")
    if (process.env.NODE_ENV !== 'test') {
        app.listen(5000, () => console.log("Rodando servidor ..."));
    }
})
.catch((erro) => {
    console.log("erro : " + erro)
})

module.exports = {app, url, mongoose}