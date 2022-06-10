const express = require('express')
const router = express.Router()

const materialController = require('../app/controllers/MaterialController')

router.get('/detail/:id', materialController.detail)
router.get('/edit/:id', materialController.edit)
router.get('/create', materialController.create)
router.get('/', materialController.index)

module.exports = router
