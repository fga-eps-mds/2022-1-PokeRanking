const router = require('express').Router()

//acessa o model de criaturas
const Criatura = require('../models/Criatura')

/*
*   Com a rota .post('/criaturas'/) instanciamos a criacao
*   de uma class 'obj' com os seus atributos obtidos pelo postman
*   e o passamos para a model(Criatura.create), a fim de ser alocado 
*   no MongoDB.
*/

//CREATE DE CRIATURAS

router.post('/', (req,res) => {
    const {name, codigo} = req.body

    if(!name){
        res.status(422).send("O nome é obrigatório")
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
})

// BUSCA DE CRIATURAS

router.get('/', async (req,res) => {
    try {
        const pokemons = await Criatura.find()

        res.status(200).json(pokemons)
    } catch (error) {
        res.status(500).json({error: error}) 
    }
})

//BUSCA POR ID

router.get('/:codigo', async (req,res) => {
    
    // extrai o dado da requisicao, pela url = req.params
    const id = req.params.codigo

    try {
        const criatura = await Criatura.findOne({codigo: id})

        if(!criatura){
            res.status(422).json({message: "Pokémon não encontrado"})
            return
        }

        res.status(200).json(criatura)
    } catch (error) {
        res.status(500).json({error: error}) 
    }
})

module.exports = router