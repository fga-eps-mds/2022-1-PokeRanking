module.exports = {
    Ordenacao_de_pokemon_por_status(atributo, forma_de_ordenacao) {

        /*
        *  A variavel ordenacao recebe pelo for e pelo vetor o valor de qual sera o atributo,
        *  no qual os pokemons serao organizados.
        *  -> ordena de forma decrescente : forma_de_ordenacao = -1
        *  -> ordena de forma crescente : forma_de_ordenacao = 1
        * 
        *  o valor de name realiza o desempate de criaturas com mesmo valor de atributo,
        *  dando preferencia para ordem alfabetica neste caso.
        */

        let ordenacao;

        possiveisStatus = ["total", "attack", "defense", "hp",
            "special_attack", "special_defense", "speed", "codigo"];

        for (let contador = 0; contador < 8; contador++) {
            if (atributo == possiveisStatus[contador]) {
                ordenacao = { [atributo]: `${forma_de_ordenacao}`, name: 1 };
                return ordenacao;
            }
        }
        return false;
    }
}