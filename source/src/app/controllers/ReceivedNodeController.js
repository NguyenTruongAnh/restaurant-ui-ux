class ReceivedNodeController {
    // [GET] /comnha/received-notes
    index(req, res, next) {
        res.render('private/received_note/index.hbs', { layout: 'main2', active: 'active--received-notes' })
    }

    // [GET] /comnha/received-notes/create
    create(req, res, next) {
        res.render('private/received_note/create.hbs', { layout: 'main2', active: 'active--received-notes' })
    }

    // [GET] /comnha/received-notes/edit/:id
    edit(req, res, next) {
        res.render('private/received_note/edit.hbs', { layout: 'main2', active: 'active--received-notes' })
    }

    // [GET] /comnha/received-notes/detail/:id
    detail(req, res, next) {
        res.render('private/received_note/detail.hbs', { layout: 'main2', active: 'active--received-notes' })
    }
}

module.exports = new ReceivedNodeController()
