//define uma rota de acesso para o arquivo criaturaRoutes
const router = require('express').Router()

// CONTROLLER
const HomeController = require("../Controller/home_controller")

// cada get com seu path de complemento ('/') busca um metodo definido no controller
router.get('/', HomeController.busca_criaturas)
router.get('/:codigo', HomeController.busca_criatura_id_nome)
router.get('/tipo/:type', HomeController.busca_criaturas_tipo)
router.get('/:type/Ranking/:atributo',HomeController.busca_criaturas_tipo_ranking)

router.post('/', HomeController.Create)
router.post('/CSV_file', HomeController.CreateParser)

module.exports = router