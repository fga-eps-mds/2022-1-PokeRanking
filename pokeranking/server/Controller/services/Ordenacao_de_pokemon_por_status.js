module.exports = {
    Ordenacao_de_pokemon_por_status(atributo, forma_de_ordenacao) {

        /*
        *  A variavel ordenacao recebe pelo switch o valor de qual sera o atributo,
        *  no qual os pokemons serao organizados.
        *  -> ordena de forma decrescente : forma_de_ordenacao = -1
        *  -> ordena de forma crescente : forma_de_ordenacao = 1
        */

        let ordenacao;

        switch (atributo) {
            case "total":
                ordenacao = { total: `${forma_de_ordenacao}` }
                break;

            case "attack":
                ordenacao = { attack: `${forma_de_ordenacao}` }
                break;

            case "defense":
                ordenacao = { defense: `${forma_de_ordenacao}` }
                break;

            case "hp":
                ordenacao = { hp: `${forma_de_ordenacao}` }
                break;

            case "special_attack":
                ordenacao = { special_attack: `${forma_de_ordenacao}` }
                break;

            case "special_defense":
                ordenacao = { special_defense: `${forma_de_ordenacao}` }
                break;

            case "speed":
                ordenacao = { speed: `${forma_de_ordenacao}` }
                break;

            case "codigo":
                ordenacao = { codigo: `${forma_de_ordenacao}` }
                break;

            default:
                return false;
                break;
        }

        return ordenacao;
    }
}