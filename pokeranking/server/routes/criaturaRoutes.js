const router = require('express').Router()

// CONTROLLER
const HomeController = require("../Controller/home_controller")
    
router.get('/', HomeController.List)
router.get('/:codigo', HomeController.List_id)
router.get('/tipo/:type', HomeController.List_type)
router.get('/:type/Ranking/:atributo',HomeController.List_MaxRanking)

router.post('/', HomeController.Create)
router.post('/CSV_file', HomeController.CreateParser)

module.exports = router