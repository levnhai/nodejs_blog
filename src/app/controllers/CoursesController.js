const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CoursesController {
    // [GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((Course) => {
                res.render('courses/show', {
                    Course: mongooseToObject(Course),
                });
            })
            .catch(next);
    }

    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] courses/create
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/hqdefault.jpg`;
        const course = new Course(formData);
        await course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
}

module.exports = new CoursesController();
