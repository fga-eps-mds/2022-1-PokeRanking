//acessa o model de criaturas
const Criatura = require('../Models/Criatura');

//Algoritmos
const {Validacao_de_tipo_pokemon} = require('../Controller/services/Validacao_de_tipo_pokemon')
const {Ranking_de_pokemon_por_atributo} = require('../Controller/services/Ranking_de_pokemon_por_atributo')
const {Ordenacao_de_pokemon_por_status} = require('./services/Ordenacao_de_pokemon_por_status')
const {Validacao_de_geracao_pokemon} = require('../Controller/services/Validacao_de_geracao_pokemon')
const {Ranking_geral_de_pokemons} = require('../Controller/services/Ranking_geral_de_pokemons')

module.exports = {

    // BUSCA DE CRIATURAS
    async busca_criaturas(req, res) {

        // ordena pela ordem crescente do atributo "codigo"
        const tipo_de_ordenacao = 1, status = "codigo";
        let ordenacao = Ordenacao_de_pokemon_por_status(status, tipo_de_ordenacao);

        //busca todas as criaturas por ordem da pokedex, iniciando pelo codigo = 1
        try {
            const pokemons = await Criatura.find().sort(ordenacao)
            res.status(200).json(pokemons)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURA POR ID OU NOME
    async busca_criatura_por_id_nome(req, res) {

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

            // eslint-disable-next-line eqeqeq
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

            // o metodo busca os pokemons com valor de atributo superior ao do pokemon selecionado 
            let Ranking = await Ranking_de_pokemon_por_atributo(pokemon)

            //Unifica os status do pokemon selecionado com a chave "rank"
            let Pokemon_Ranking = Object.assign({}, pokemon._doc, { Ranking })

            res.status(200).json([Pokemon_Ranking])
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURAS POR TIPO
    async busca_criaturas_por_tipo(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type

        //const criatura_tipo_verficado = Verificao_de_tipo(type)
        const criatura_tipo_verficado = Validacao_de_tipo_pokemon(type)

        if (!criatura_tipo_verficado) {
            res.status(422).json({ message: "tipo de pokémon não encontrado" })
            return
        }

        // ordena pela ordem crescente de atributo "codigo"
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

    // BUSCA DE CRIATURAS PELA GERAÇÃO
    async busca_criaturas_por_geracao(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const geracao = req.params.geracao

        const geracao_criatura_verificado = Validacao_de_geracao_pokemon(geracao)

        if (!geracao_criatura_verificado) {
            res.status(422).json({ message: "tipo de geração de pokémon não encontrada" })
            return
        }

        // ordena pela ordem crescente de atributo "codigo"
        let ordenacao = { codigo: 1 }
        try {

            const pokemons = await Criatura.find({"generation": `${geracao}`}).sort(ordenacao)
            res.status(200).json(pokemons)
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // BUSCA DE CRIATURAS POR TIPO E COM ORDENACAO DE RANKING POR ATRIBUTO
    async busca_criaturas_por_tipo_atributo(req, res) {

        // extrai o dado da requisicao pela url = req.params
        const type = req.params.type
        const atributo = req.params.atributo

        try {

            const tipo_de_ordenacao = -1;
            let ordenacao = Ordenacao_de_pokemon_por_status(atributo, tipo_de_ordenacao);

            if (!ordenacao) {
                res.status(422).json({ message: "atributo não encontrado" })
                return
            }

            const criatura_tipo_verficado = Validacao_de_tipo_pokemon(type)

            if (!criatura_tipo_verficado) {
                res.status(422).json({ message: "tipo de pokémon não encontrado" })
                return
            }

            const geracao = req.params.geracao
            const geracao_criatura_verificado = Validacao_de_geracao_pokemon(geracao)

            if (!geracao_criatura_verificado) {
                res.status(422).json({ message: "tipo de geração de pokémon não encontrada" })
                return
            }
            
            let pokemons = await Ranking_geral_de_pokemons(ordenacao, type, geracao)
            res.status(200).json(pokemons)
            
        } catch (error) {
            res.status(500).json({ error: error })
        }
    },

    // CREATE DE CRIATURA
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
            codigo, name, type_1, type_2, Total,
            HP, Attack, Defense, Sp_Atk, Sp_Def,
            Speed, Generation, Legendary
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