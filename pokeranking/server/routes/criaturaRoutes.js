const router = require('express').Router()

//acessa o model de criaturas
const Criatura = require('../models/Criatura')

/*
*   Com a rota .post('/criaturas'/) instanciamos a criacao
*   de uma class 'obj' com os seus atributos obtidos pelo postman
*   e o passamos para a model(Criatura.create), a fim de ser alocado 
*   no MongoDB.
*/

//CREATE DE CRIATURA

router.post('/', (req,res) => {
    const {
        codigo, name, type_1, type_2, Total,
        HP, Attack, Defense, Sp_Atk, Sp_Def,
        Speed, Generation, Legendary 
    } = req.body

    if(!codigo){
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
})

// CREATE PARSER DE CRIATURA(S)

/*
*   Parser de arquivo csv para json. O arquivo results obtem o valor convertido em JSON
*   das criaturas,  que por fim sao alocadas para o banco de dados.
*/

router.post('/CSV_file', (req,res) => {
    
    const csv = require('csv-parser');
    const fs = require('fs')
    const results = [];

    fs.createReadStream('./Parser_file/pokemon_definitivo(url).csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        //console.log(results)
        try {
            Criatura.insertMany(results, (erro, resultado)=>{
                res.status(201).send('Criatura(s) criadas com sucesso')
            })
    
        } catch (error) {
            res.status(500).send(error)        
        }
    })

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