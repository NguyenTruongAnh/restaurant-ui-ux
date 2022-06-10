const express = require('express')
const router = express.Router()

const memberController = require('../app/controllers/MemberController')

router.get('/create', memberController.create)
router.get('/edit/:id', memberController.edit)
router.get('/detail/:id', memberController.detail)
router.get('/', memberController.index)

module.exports = router
