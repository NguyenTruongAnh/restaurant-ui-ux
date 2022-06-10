class BillController {
    // [GET] /comnha/bills
    index(req, res, next) {
        res.render('private/bill/index.hbs', { layout: 'main2', active: 'active--bills' })
    }

    // [GET] /comnha/bills/create
    create(req, res, next) {
        res.render('private/bill/create.hbs', { layout: 'main2', active: 'active--bills' })
    }

    // [GET] /comnha/bills/edit/:id
    edit(req, res, next) {
        res.render('private/bill/edit.hbs', { layout: 'main2', active: 'active--bills' })
    }

    // [GET] /comnha/bills/detail/:id
    detail(req, res, next) {
        res.render('private/bill/detail.hbs', { layout: 'main2', active: 'active--bills' })
    }
}

module.exports = new BillController()
