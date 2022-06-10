const express = require('express')
const router = express.Router()

const privateSiteController = require('../app/controllers/PrivateSiteController')

router.get('/revenue', privateSiteController.revenue)
router.get('/order', privateSiteController.order)
router.get('/tables', privateSiteController.table)
router.get('/password', privateSiteController.password)
router.get('/login', privateSiteController.login)
router.get('/', privateSiteController.index)

module.exports = router
