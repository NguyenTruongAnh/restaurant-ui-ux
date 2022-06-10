const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/PublicSiteController')

router.get('/checkouts', siteController.checkouts)
router.get('/cart', siteController.cart)
router.get('/book', siteController.book)
router.get('/contact', siteController.contact)
router.get('/introduce', siteController.introduce)
router.get('/member', siteController.member)
router.get('/menu/:id', siteController.detail)
router.get('/menu', siteController.menu)
router.get('/', siteController.index)

module.exports = router
