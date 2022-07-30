const router = require('express').Router()

// CONTROLLER
const HomeController = require("../Controller/home_controller")
    
router.get('/', HomeController.List)
router.get('/:codigo', HomeController.List_id)
router.post('/', HomeController.Create)
router.post('/CSV_file', HomeController.CreateParser)

module.exports = router