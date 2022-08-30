//acessa o model de criaturas
const Criatura = require('../../Models/Criatura');

module.exports = {
    async Ranking_de_pokemon_por_atributo(pokemon) {

        // o metodo busca os pokemons com valor de atributo superior ao do pokemon selecionado 
        let comparacao_total = await Criatura.find({ total: { $gt: `${pokemon.total}` } })
        let comparacao_attack = await Criatura.find({ attack: { $gt: `${pokemon.attack}` } })
        let comparacao_defense = await Criatura.find({ defense: { $gt: `${pokemon.defense}` } })
        let comparacao_hp = await Criatura.find({ hp: { $gt: `${pokemon.hp}` } })
        let comparacao_special_attack = await Criatura.find({ special_attack: { $gt: `${pokemon.special_attack}` } })
        let comparacao_special_defense = await Criatura.find({ special_defense: { $gt: `${pokemon.special_defense}` } })
        let comparacao_speed = await Criatura.find({ speed: { $gt: `${pokemon.speed}` } })

        /*  
        * -> A variavel de (comparacao_atributo.length + 1) recebe a qtde de criaturas 
        * a frente do pokemon selecionado.  
        * -> O array JSON "Ranking" unifica as colocacoes do pokemon em cada atributo
        */
        let Ranking = {
            "colocado_total": `${(comparacao_total.length + 1)}`,
            "colocado_attack": `${(comparacao_attack.length + 1)}`,
            "colocado_defense": `${(comparacao_defense.length + 1)}`,
            "colocado_hp": `${(comparacao_hp.length + 1)}`,
            "colocado_special_attack": `${(comparacao_special_attack.length + 1)}`,
            "colocado_special_defense": `${(comparacao_special_defense.length + 1)}`,
            "colocado_speed": `${(comparacao_speed.length + 1)}`
        }

        return Ranking
    }
}