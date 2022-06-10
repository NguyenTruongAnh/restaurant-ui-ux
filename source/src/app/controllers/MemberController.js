class MemberController {
    // [GET] /comnha/members
    index(req, res, next) {
        res.render('private/member/index.hbs', { layout: 'main2', active: 'active--members' })
    }

    // [GET] /comnha/members/create
    create(req, res, next) {
        res.render('private/member/create.hbs', { layout: 'main2', active: 'active--members' })
    }

    // [GET] /comnha/members/edit/:id
    edit(req, res, next) {
        res.render('private/member/edit.hbs', { layout: 'main2', active: 'active--members' })
    }

    // [GET] /comnha/members/detail/:id
    detail(req, res, next) {
        res.render('private/member/detail.hbs', { layout: 'main2', active: 'active--members' })
    }
}

module.exports = new MemberController()
