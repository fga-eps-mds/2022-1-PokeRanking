//acessa o model de criaturas
const Criatura = require('../Models/Criatura')

module.exports = {

    // BUSCA DE CRIATURAS
    async busca_criaturas(req, res) {

        // ordena pela ordem crescente do atributo "codigo"
        let ordenacao = { codigo: 1 }

        //busca todas as criaturas por ordem da pokedex, iniciando pelo codigo = 1
        try {
            const pokemons = await Criatura.find().sort(ordenacao)
            res.status(200).json(pokemons)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    //BUSCA DE CRIATURA POR ID OU NOME
    async busca_criatura_id_nome(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const id = req.params.codigo

        // avalia se o valor da variavel eh um numero (false) ou string (true)
        let juiz = isNaN(id)

        try {

            /*
            *   juiz == true, busca a criatura pelo name = id(String)
            *   juiz == false, busca a criatura pelo codigo de pokedex = id(Number)
            */
            let pokemon = await Criatura

            if (juiz == true) {
                pokemon = await Criatura.findOne({ name: id })
            } else {
                pokemon = await Criatura.findOne({ codigo: id })
            }

            //  Caso de pokemon com nome ou id nao encontrado na busca 
            if (!pokemon) {
                res.status(422).json({ message: "Pokémon não encontrado" })
                return
            }

            // busca os pokemons com valor de atributo acima do pokemon selecionado 
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
            * -> O array JSON "rank" unifica as colocacoes do pokemon em cada atributo
            */
            let rank = {
                "colocado_total": `${(comparacao_total.length + 1)}`,
                "colocado_attack": `${(comparacao_attack.length + 1)}`,
                "colocado_defense": `${(comparacao_defense.length + 1)}`,
                "colocado_hp": `${(comparacao_hp.length + 1)}`,
                "colocado_special_attack": `${(comparacao_special_attack.length + 1)}`,
                "colocado_special_defense": `${(comparacao_special_defense.length + 1)}`,
                "colocado_speed": `${(comparacao_speed.length + 1)}`
            }

            //Unifica os status do pokemon selecionado com a chave "rank"
            let Pokemon_Ranking = Object.assign([{ pokemon, rank }])

            res.status(200).json(Pokemon_Ranking)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURAS POR TIPO
    async busca_criaturas_tipo(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type

        // ordena pela ordem crescente do atributo "codigo"
        let ordenacao = { codigo: 1 }
        try {

            /*
            *  busca as criaturas com type_1 = type OU($or) type_2 = type.
            *  Por fim ordena as criaturas pela ordem crescente do numero da pokedex -> sort
            */
            const pokemons = await Criatura.find({
                $or: [
                    { "type_1": `${type}` },
                    { "type_2": `${type}` }
                ]
            }).sort(ordenacao)
            res.status(200).json(pokemons)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURAS POR RANKING E TIPO
    async busca_criaturas_tipo_ranking(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type
        const atributo = req.params.atributo

        try {

            /*
            *  A variavel ordenacao recebe pelo switch o valor de qual sera o atributo,
            *  no qual os pokemons serao organizados.
            *  -> ordena de forma decrescente : {atributo: -1}
            *  -> ordena de forma crescente : {atributo: 1}
            */
            let ordenacao;

            switch (atributo) {
                case "total":
                    ordenacao = { total: -1 }
                    break;

                case "attack":
                    ordenacao = { attack: -1 }
                    break;

                case "defense":
                    ordenacao = { defense: -1 }
                    break;

                case "hp":
                    ordenacao = { hp: -1 }
                    break;

                case "special_attack":
                    ordenacao = { special_attack: -1 }
                    break;

                case "special_defense":
                    ordenacao = { special_defense: -1 }
                    break;

                case "speed":
                    ordenacao = { speed: -1 }
                    break;

                default:
                    res.status(422).json({ message: "atributo não encontrado" })
                    return
                    break;
            }

            /*
            * NA = nao tem um valor de "tipo" a ser buscado. Ele
            * engloba todas as criaturas.
            */
            if (type != "NA") {
                const pokemons = await Criatura.find({
                    $or: [
                        { "type_1": `${type}` },
                        { "type_2": `${type}` }
                    ]
                }).sort(ordenacao)
                res.status(200).json(pokemons)
            } else {
                const pokemons = await Criatura.find().sort(ordenacao)
                res.status(200).json(pokemons)
            }
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    //CREATE DE CRIATURA
    async Create(req, res) {
        const {
            codigo, name, type_1, type_2, Total,
            HP, Attack, Defense, Sp_Atk, Sp_Def,
            Speed, Generation, Legendary
        } = req.body

        if (!codigo) {
            res.status(422).send("O codigo é obrigatório")
            return
        }

        const obj = {
            codigo,
            name,
            type_1,
            type_2,
            Total,
            HP,
            Attack,
            Defense,
            Sp_Atk,
            Sp_Def,
            Speed,
            Generation,
            Legendary
        }

        try {
            Criatura.create(obj)
            res.status(201).send('Criatura criado com sucesso')
        } catch (error) {
            res.status(500).send(error)
        }

    },

    // CREATE CSV-PARSER DE CRIATURA(S)
    async CreateParser(req, res) {
        const csv = require('csv-parser');
        const fs = require('fs')
        const results = [];

        fs.createReadStream('./Parser_file/pokemon_definitivo(url).csv')
            .pipe(csv({}))
            .on('data', (data) => results.push(data))
            .on('end', () => {
                //console.log(results)
                try {
                    Criatura.insertMany(results, (erro, resultado) => {
                        res.status(201).send('Criatura(s) criadas com sucesso')
                    })

                } catch (error) {
                    res.status(500).send(error)
                }
            })
    },
}