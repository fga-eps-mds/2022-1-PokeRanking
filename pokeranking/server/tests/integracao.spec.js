const request = require('supertest')
const { app, url, mongoose } = require('../index')

//MOCKS
const allPokemons = require('./mocks/allPokemons')
const pokemon_001 = require('./mocks/pokemon_001')
const dados_pokemon_01 = require('./mocks/dados_pokemon_01')
const pokemons_type_ranking = require('./mocks/pokemon_type_ranking')
const pokemon_type = require('./mocks/pokemon_type')
const pokemon_generation = require('./mocks/pokemon_generation')
const pokemon_atributo_geracao_ranking = require('./mocks/pokemon_atributo_geracao_ranking')

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

        const response = await request(app).get("/criaturas/NA/Ranking/total/Geracao/0")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemons_type_ranking)
    });

    it("deve ser possivel visualizar todas as criaturas por ranking de atributo, dado um de mesmo tipo e número de geração", async () => {

        const response = await request(app).get("/criaturas/NA/Ranking/total/Geracao/1")

        expect(response.statusCode).toEqual(200)
        expect(response.body).toStrictEqual(pokemon_atributo_geracao_ranking)
    });
})

//VERIFICACAO DE ERROS DE LISTAGEM
describe("Verificação de erros: listagem de pokemons", () => {
    it("Deve retornar uma mensagem em caso de listagem de Pokémons com valor de atributo incorreto", async () => {

        const response = await request(app).get("/criaturas/water/Ranking/test/Geracao/1")

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

//UPDATE DE POKEMON
describe("update de pokemon", () => {
    it("Deve retorna uma mensagem de erro caso o código de pokémon procurado seja igual a null", async () => {

        const response = await request(app).post("/criaturas/updatePokemon/null")

        expect(response.statusCode).toEqual(404)
    });

    it("Deve retornar erro ao não encontrar uma criatura pelo seu id", async () => {

        const response = await request(app).post("/criaturas/updatePokemon/-1")

        expect(response.statusCode).toEqual(422)
        expect(response.body).toEqual({ message: "Pokémon não encontrado" });
    });

    it("Deve conter mensagem de erro ao passar algum atributo obrigatorio como nulo", async () => {

        const response = await request(app).post("/criaturas/updatePokemon/1")
            .send({
                codigo: null,
                name: "bulbasaur",
                type_1: "grass",
                type_2: null,
                hp: 45,
                attack: 49,
                defense: 49,
                special_attack: null,
                special_defense: 65,
                speed: 45,
                generation: "1",
                url_image: "https://raw.githubusercontent.com/fga-eps-mds/2022-1-PokeRanking/main/docs/Imagens/Pokemons/475p/001.png",
                shape: "quadruped",
                total: 318
            });

        expect(response.statusCode).toEqual(422)
        expect(response.body).toEqual({ message: "Atributo(s) obrigatório(s) para realizar o update" });
    });

    it("Deve apresentar mensagem de sucesso ao fazer o update do pokemon", async () => {

        const response = await request(app).post("/criaturas/updatePokemon/1")
            .send({
                codigo: 999,
                name: "Artus",
                type_1: "vidro",
                type_2: "veneno",
                hp: 2,
                attack: 50,
                defense: 60,
                special_attack: 70,
                special_defense: 70,
                speed: 8,
                generation: "2",
                url_image: "null",
                shape: "humanoid",
                total: 500
            });

        expect(response.statusCode).toEqual(200)
        expect(response.body).toEqual({ message: "Criatura encontrada/atualizada com sucesso" });
    });

    it("Realiza a restauração do update da criatura para o estado original", async () => {

        const response = await request(app).post("/criaturas/recupera_criatura_de_teste/999")
            .send({
                codigo: 1,
                name: "bulbasaur",
                type_1: "grass",
                type_2: "poison",
                hp: 45,
                attack: 49,
                defense: 49,
                special_attack: 65,
                special_defense: 65,
                speed: 45,
                generation: "1",
                url_image: "https://raw.githubusercontent.com/fga-eps-mds/2022-1-PokeRanking/main/docs/Imagens/Pokemons/475p/001.png",
                shape: "quadruped",
                total: 318
            });

        expect(response.statusCode).toEqual(200)
    });

})