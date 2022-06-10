class PrivateSiteController {

    // [GET] /comnha/password
    password(req, res, next) {
        res.render('private/password', { layout: 'main2', active: 'active--password' })
    }

    // [GET] /comnha/order
    order(req, res, next) {
        res.render('private/order', { layout: 'main2', active: 'active--order' })
    }

    // [GET] /comnha/tables
    table(req, res, next) {
        res.render('private/table', { layout: 'main2', active: 'active--tables-condition' })
    }

    // [GET] /comnha/login
    login(req, res, next) {
        res.render('private/login', { layout: 'main3' })
    }

    // [GET] /comnha/revenue
    revenue(req, res, next) {
        res.render('private/revenue', { layout: 'main2', active: 'active--revenue' })
    }

    // [GET] /comnha/
    index(req, res, next) {
        res.render('private/home', { layout: 'main2', active: 'active--home' })
    }
}

module.exports = new PrivateSiteController();
