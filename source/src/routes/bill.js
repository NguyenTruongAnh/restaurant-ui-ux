const express = require('express')
const router = express.Router()

const billController = require('../app/controllers/BillController')

router.get('/create', billController.create)
router.get('/edit/:id', billController.edit)
router.get('/detail/:id', billController.detail)
router.get('/', billController.index)

module.exports = router
