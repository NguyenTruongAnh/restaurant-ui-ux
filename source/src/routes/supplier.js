const express = require('express')
const router = express.Router()

const supplierController = require('../app/controllers/SupplierController')

router.get('/create', supplierController.create)
router.get('/edit/:id', supplierController.edit)
router.get('/detail/:id', supplierController.detail)
router.get('/', supplierController.index)

module.exports = router
