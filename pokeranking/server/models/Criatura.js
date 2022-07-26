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
    codigo: Number,
    name: String,
    type_1: String,
    type_2: String,
    Total: Number,
    hp: Number,
    attack: Number,
    defense: Number,
    special_attack: Number,
    special_defense: Number,
    speed: Number,
    generation: String,
    Legendary: String,
    url_image: String,
    shape: String,
    total: Number
})

// Exporta a Class para ser utilizada em outras paginas
module.exports = Criatura