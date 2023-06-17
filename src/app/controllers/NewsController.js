class NewsController {
    // [GET] profile
    index(req, res) {
        res.render('profile');
    }

    // [GET] profile detail
    show(req, res) {
        res.send('profile detail');
    }

    haike(req, res) {
        res.send('haikake');
    }
}

module.exports = new NewsController();
