//acessa o model de criaturas
const Criatura = require('../Models/Criatura')

module.exports = {

    // BUSCA DE CRIATURAS
    async List(req, res) {
        
        // ordenacao de ordem crescente dos numeros da pokedex
        let ordenacao = { codigo: 1 }

        try {
            const pokemons = await Criatura.find().sort(ordenacao)
            res.status(200).json(pokemons)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    //BUSCA DE CRIATURAS POR ID
    async List_id(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const id = req.params.codigo

        try {
            const criatura = await Criatura.findOne({ codigo: id })

            if (!criatura) {
                res.status(422).json({ message: "Pokémon não encontrado" })
                return
            }

            res.status(200).json(criatura)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURAS POR TIPO
    async List_type(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type

        // ordenacao de ordem crescente dos numeros da pokedex
        let ordenacao = { codigo: 1 }
        try {
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
    async List_MaxRanking(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type
        const atributo = req.params.atributo

        try {

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

            //NA = engloba todas as criaturas
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

    // CREATE PARSER DE CRIATURA(S)
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