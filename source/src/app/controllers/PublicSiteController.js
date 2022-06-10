class SiteController {
    // [GET] /
    index(req, res, next) {
        res.render('public/home');
    }

    // [GET] /menu
    menu(req, res, next) {
        res.render('public/menu');
    }

    // [GET] /menu/:id
    detail(req, res, next) {
        //find id
        res.render('public/detail');
    }

    // [GET] /introduce
    introduce(req, res, next) {
        res.render('public/introduce');
    }

    // [GET] /contact
    contact(req, res, next) {
        res.render('public/contact');
    }

    // [GET] /book
    book(req, res, next) {
        res.render('public/book');
    }

    // [GET] /cart
    cart(req, res, next) {
        res.render('public/cart');
    }

    // [GET] /checkouts
    checkouts(req, res, next) {
        res.render('public/checkouts', { layout: 'main3' });
    }

    // [GET] /member
    member(req, res, next) {
        res.render('public/member')
    }
}

module.exports = new SiteController();
