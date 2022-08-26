const { Ordenacao_de_pokemon_por_status } = require('../Controller/services/Ordenacao_de_pokemon_por_status')
const { Validacao_de_tipo_pokemon } = require('../Controller/services/Validacao_de_tipo_pokemon')

describe("testes unitários de funções", () => {
    describe("função: Ordenacao_de_pokemon_por_status", () => {

        it("deve retornar um valor de ordenacão decrescente do atributo total", async () => {
            let atributo = "total"; forma_de_ordenacao = -1;
            const response = Ordenacao_de_pokemon_por_status(atributo, forma_de_ordenacao)

            expect(response).toStrictEqual({ "total": "-1" })
        });

        it("ERRO: deve retornar um valor igual a false no caso de atributo inexistente no sistema", async () => {
            let atributo = "test"; forma_de_ordenacao = -1;
            const response = Ordenacao_de_pokemon_por_status(atributo, forma_de_ordenacao)

            expect(response).toStrictEqual(false)
        });
    });
    describe("função: Validacao_de_tipo_pokemon", () => {
        it("deve retornar um status igual a true, caso o tipo de pokemon buscado seja validado", async () => {
            let type = "ground";
            const response = Validacao_de_tipo_pokemon(type)

            expect(response).toStrictEqual(true)
        });

        it("ERRO: deve retornar um status igual a false, caso o tipo de pokemon buscado seja inexistente", async () => {
            let type = "test";
            const response = Validacao_de_tipo_pokemon(type)

            expect(response).toStrictEqual(false)
        });
    })
})