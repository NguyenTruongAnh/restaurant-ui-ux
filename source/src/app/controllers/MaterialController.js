class MaterialController {
    // [GET] /comnha/materials
    index(req, res, next) {
        res.render('private/material/index.hbs', { layout: 'main2', active: 'active--materials' })
    }

    // [GET] /comnha/materials/create
    create(req, res, next) {
        res.render('private/material/create.hbs', { layout: 'main2', active: 'active--materials' })
    }

    // [GET] /comnha/materials/edit/:id
    edit(req, res, next) {
        res.render('private/material/edit.hbs', { layout: 'main2', active: 'active--materials' })
    }

    // [GET] /comnha/materials/detail/:id
    detail(req, res, next) {
        res.render('private/material/detail.hbs', { layout: 'main2', active: 'active--materials' })
    }
}

module.exports = new MaterialController()
