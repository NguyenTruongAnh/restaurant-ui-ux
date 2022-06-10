class SupplierController {
    // [GET] /comnha/suppliers
    index(req, res, next) {
        res.render('private/supplier/index.hbs', { layout: 'main2', active: 'active--suppliers' })
    }

    // [GET] /comnha/suppliers/create
    create(req, res, next) {
        res.render('private/supplier/create.hbs', { layout: 'main2', active: 'active--suppliers' })
    }

    // [GET] /comnha/suppliers/edit/:id
    edit(req, res, next) {
        res.render('private/supplier/edit.hbs', { layout: 'main2', active: 'active--suppliers' })
    }

    // [GET] /comnha/suppliers/detail/:id
    detail(req, res, next) {
        res.render('private/supplier/detail.hbs', { layout: 'main2', active: 'active--suppliers' })
    }
}

module.exports = new SupplierController()
