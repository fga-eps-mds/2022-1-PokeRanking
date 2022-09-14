module.exports = {
    Validacao_de_geracao_pokemon(geracao_extraida_pela_URL) {

        let geracao = geracao_extraida_pela_URL;

        for (let contador = 0; contador <= 6; contador++) {
            if (geracao == contador) {
                return true;
            }
        }
        return false;
    }
}