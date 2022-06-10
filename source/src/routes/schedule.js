const express = require('express')
const router = express.Router()

const scheduleController = require('../app/controllers/ScheduleController')

router.get('/detail/:id', scheduleController.detail)
router.get('/edit/:id', scheduleController.edit)
router.get('/create', scheduleController.create)
router.get('/', scheduleController.index)

module.exports = router
