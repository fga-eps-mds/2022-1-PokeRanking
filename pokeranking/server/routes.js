//define uma rota de acesso para o arquivo criaturaRoutes
const router = require('express').Router()

// CONTROLLER
const HomeController = require("./Controller/home_controller")

// cada get com seu path de complemento ('/') busca um metodo definido no controller
router.get('/', HomeController.busca_criaturas)
router.get('/:codigo', HomeController.busca_criatura_por_id_nome)
router.get('/tipo/:type', HomeController.busca_criaturas_por_tipo)
router.get('/geracao/:geracao',HomeController.busca_criaturas_por_geracao)
router.get('/:type/Ranking/:atributo/Geracao/:geracao',HomeController.busca_criaturas_por_tipo_atributo)

router.post('/', HomeController.Create)
router.post('/updatePokemon/:codigo', HomeController.update_criatura)
router.post('/recupera_criatura_de_teste/:codigo', HomeController.recupera_criatura_de_teste)
router.post('/CSV_file', HomeController.CreateParser)

module.exports = router