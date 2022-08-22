module.exports = {
    Validacao_de_tipo_pokemon(dado_extraido_pela_URL) {

        let type = dado_extraido_pela_URL;

        if (type == "normal" || type == "fire" || type == "water" || type == "grass" || type == "NA" ||
            type == "flying" || type == "fighting" || type == "poison" || type == "eletric" ||
            type == "ground" || type == "bug" || type == "ghost" || type == "steel" || type == "dragon" ||
            type == "dark" || type == "fairy" || type == "rock" || type == "psychic" || type == "ice") {
            return true;
        } else {
            return false
        }
    }
}