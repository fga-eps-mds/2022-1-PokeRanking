module.exports = {
    Validacao_de_tipo_pokemon(dado_extraido_pela_URL) {

        let type = dado_extraido_pela_URL;

        possiveisTipos = ["normal", "fire", "water", "grass", "NA", "flying", "fighting",
            "poison", "electric", "ground", "bug", "ghost", "steel", "dragon", "dark", "fairy",
            "rock", "psychic", "ice"];

        for (let contador = 0; contador <= 19; contador++) {
            if (type == possiveisTipos[contador]) {
                return true;
            }
        }

        return false;
    }
}