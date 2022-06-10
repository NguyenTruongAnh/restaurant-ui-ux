class ScheduleController {
    // [GET] /comnha/schedules
    index(req, res, next) {
        res.render('private/schedule/index.hbs', { layout: 'main2', active: 'active--schedules' })
    }

    // [GET] /comnha/schedules/create
    create(req, res, next) {
        res.render('private/schedule/create.hbs', { layout: 'main2', active: 'active--schedules' })
    }

    // [GET] /comnha/schedules/edit/:id
    edit(req, res, next) {
        res.render('private/schedule/edit.hbs', { layout: 'main2', active: 'active--schedules' })
    }

    // [GET] /comnha/schedules/detail/:id
    detail(req, res, next) {
        res.render('private/schedule/detail.hbs', { layout: 'main2', active: 'active--schedules' })
    }
}

module.exports = new ScheduleController()
