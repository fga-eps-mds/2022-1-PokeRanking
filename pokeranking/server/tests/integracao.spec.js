const request = require('supertest')
const { app, url, mongoose } = require('../index')

//MOCKS
const allPokemons = require('./mocks/allPokemons')
const pokemon_001 = require('./mocks/pokemon_001')
const pokemons_type_ranking = require('./mocks/pokemon_type_ranking')
const pokemon_type = require('./mocks/pokemon_type')
const pokemon_generation = require('./mocks/pokemon_generation')

beforeAll(done => {
    done()
})

afterAll(done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.connection.close()
    done()
})

describe("teste de conexão", () => {
    const MOONGO_URL = url;

    it("deve realizar a conexao com o banco de dados Atlas MongoDB", async () => {
        await mongoose.connect(MOONGO_URL,
            { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => { });
    });
})

//LISTAGEM DE POKEMONS
describe("listagem de pokemons", () => {

    //cada it representa um teste na aplicacao
    it("deve ser possivel visualizar todos os Pokémons", async () => {

        //busca a resposta dada pelo path "http://localhost:5000/criaturas"
        const response = await request(app).get("/criaturas")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(allPokemons)
    });

    it("deve ser possivel visualizar todas as criaturas dado um de mesmo tipo", async () => {

        const response = await request(app).get("/criaturas/tipo/fire")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemon_type)
    });

    it("deve ser possivel visualizar todas as criaturas dado um numero de geracao", async () => {

        const response = await request(app).get("/criaturas/geracao/1")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemon_generation)
    });

    it("deve ser possivel visualizar todas as criaturas por ranking de atributo e dado um de mesmo tipo", async () => {

        const response = await request(app).get("/criaturas/NA/Ranking/total")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemons_type_ranking)
    });
})

//VERIFICACAO DE ERROS DE LISTAGEM
describe("Verificação de erros: listagem de pokemons", () => {
    it("Deve retornar uma mensagem em caso de listagem de Pokémons com valor de atributo incorreto", async () => {

        const response = await request(app).get("/criaturas/water/Ranking/test")

        expect(response.statusCode).toEqual(422)
        expect(response.body).toHaveProperty('message')
    });

    it("Deve retornar uma mensagem em caso de listagem de Pokémons com valor de tipo incorreto", async () => {

        const response = await request(app).get("/criaturas/tipo/test")

        expect(response.statusCode).toEqual(422)
        expect(response.body).toHaveProperty('message')
    });
});

//BUSCA DE POKEMON
describe("busca de pokemon", () => {
    it("Deve ser possivel buscar uma criatura pelo seu numero de id", async () => {

        const response = await request(app).get("/criaturas/1")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemon_001)
    });

    it("Deve ser possivel buscar uma criatura pelo seu nome", async () => {

        const response = await request(app).get("/criaturas/bulbasaur")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemon_001)
    });

    it("ERRO: Deve retonar uma mensagem em caso de pokemon com nome ou id nao encontrados na busca ", async () => {

        const response = await request(app).get("/criaturas/test")

        expect(response.statusCode).toEqual(422)
        expect(response.body).toHaveProperty('message')
    });
})