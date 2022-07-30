//acessa o model de criaturas
const Criatura = require('../Models/Criatura')

module.exports = {

    // BUSCA DE CRIATURAS
    async List(req, res) {
        try {
            const pokemons = await Criatura.find()
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

    //CREATE DE CRIATURA
    async Create(req, res) {
        const { name, codigo } = req.body

        if (!codigo) {
            res.status(422).send("O id é obrigatório")
            return
        }

        const obj = {
            name,
            codigo
        }

        try {
            Criatura.create(obj)
            res.status(201).send('Criatura criado com sucesso')
        } catch (error) {
            res.status(500).send(error)
        }
    },
}