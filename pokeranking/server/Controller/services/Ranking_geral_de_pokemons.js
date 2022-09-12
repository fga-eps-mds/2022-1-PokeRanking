//acessa o model de criaturas
const Criatura = require('../../Models/Criatura');

module.exports = {
    async Ranking_geral_de_pokemons(ordenacao, type, geracao){
    
        if(geracao != 0){
            if (type != "NA") {
                const pokemons = await Criatura.find({
                    $or: [
                        { "type_1": `${type}` },
                        { "type_2": `${type}` },
                    ],  
                    "generation": `${geracao}`
                }).sort(ordenacao)
                return pokemons;
            }else{
                const pokemons = await Criatura.find({ "generation": `${geracao}` })
                .sort(ordenacao)
                return pokemons;
            }
        }else{
            if (type != "NA") {
                const pokemons = await Criatura.find({
                    $or: [
                        { "type_1": `${type}` },
                        { "type_2": `${type}` },
                    ],  
                }).sort(ordenacao)
                return pokemons;
            }else{
                const pokemons = await Criatura.find().sort(ordenacao)
                return pokemons;
            }
        }

    }
}