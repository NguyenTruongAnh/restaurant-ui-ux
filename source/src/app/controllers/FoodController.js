class FoodController {
    // [GET] /comnha/foods
    index(req, res, next) {
        res.render('private/food/index.hbs', { layout: 'main2', active: 'active--foods' })
    }

    // [GET] /comnha/foods/create
    create(req, res, next) {
        res.render('private/food/create.hbs', { layout: 'main2', active: 'active--foods' })
    }

    // [GET] /comnha/foods/create-group
    createGroup(req, res, next) {
        res.render('private/food/create-group.hbs', { layout: 'main2', active: 'active--foods' })
    }
    // [GET] /comnha/foods/edit/:id
    edit(req, res, next) {
        res.render('private/food/edit.hbs', { layout: 'main2', active: 'active--foods' })
    }

    // [GET] /comnha/foods/edit-group/:id
    editGroup(req, res, next) {
        res.render('private/food/edit-group.hbs', { layout: 'main2', active: 'active--foods' })
    }
    // [GET] /comnha/foods/detail/:id
    detail(req, res, next) {
        res.render('private/food/detail.hbs', { layout: 'main2', active: 'active--foods' })
    }

    // [GET] /comnha/foods/detail-group/:id
    detailGroup(req, res, next) {
        res.render('private/food/detail-group.hbs', { layout: 'main2', active: 'active--foods' })
    }
}

module.exports = new FoodController()
