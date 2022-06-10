const express = require('express')
const router = express.Router()

const staffController = require('../app/controllers/StaffController')

router.get('/detail/:id', staffController.detail)
router.get('/edit/:id', staffController.edit)
router.get('/create', staffController.create)
router.get('/', staffController.index)

module.exports = router
