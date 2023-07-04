const Course = require('../models/Course');

class SitesController {
    // [GET] home
    index(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({ error: 'ERROR..!!!' });
            });
    }

    // [GET] search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();
