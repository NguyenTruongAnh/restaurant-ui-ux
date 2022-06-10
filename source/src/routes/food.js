const express = require('express')
const router = express.Router()

const foodController = require('../app/controllers/FoodController')

router.get('/detail-group/:id', foodController.detailGroup)
router.get('/edit-group/:id', foodController.editGroup)
router.get('/create-group', foodController.createGroup)
router.get('/detail/:id', foodController.detail)
router.get('/edit/:id', foodController.edit)
router.get('/create', foodController.create)
router.get('/', foodController.index)

module.exports = router
