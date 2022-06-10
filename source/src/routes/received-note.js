const express = require('express')
const router = express.Router()

const receivedNoteController = require('../app/controllers/ReceivedNodeController')

router.get('/create', receivedNoteController.create)
router.get('/edit/:id', receivedNoteController.edit)
router.get('/detail/:id', receivedNoteController.detail)
router.get('/', receivedNoteController.index)

module.exports = router
