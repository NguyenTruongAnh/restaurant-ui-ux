class StaffController {
    // [GET] /comnha/staffs
    index(req, res, next) {
        res.render('private/staff/index.hbs', { layout: 'main2', active: 'active--staffs' })
    }

    // [GET] /comnha/staffs/create
    create(req, res, next) {
        res.render('private/staff/create.hbs', { layout: 'main2', active: 'active--staffs' })
    }

    // [GET] /comnha/staffs/edit/:id
    edit(req,  res, next) {
        res.render('private/staff/edit.hbs', { layout: 'main2', active: 'active--staffs' })
    }

    // [GET] /comnha/staffs/detail/:id
    detail(req,  res, next) {
        res.render('private/staff/detail.hbs', { layout: 'main2', active: 'active--staffs' })
    }
}

module.exports = new StaffController()
