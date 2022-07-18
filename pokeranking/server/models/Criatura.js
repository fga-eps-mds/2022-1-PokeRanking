const mongoose = require('mongoose')

/*
*   Funciona como uma classe em Orientacao a Objetos.
*
*   A class Criatura recebe a sua instanciacao com o 
*   mongoose.model, no qual eh passado o nome da colecao
*   ('Criatura') a ser criada no BD e os metadados que ela
*   pode receber
*/
const Criatura = mongoose.model('Criatura', {
    name: String,
    codigo: Number
})

// Exporta a Class para ser utilizada em outras paginas
module.exports = Criatura