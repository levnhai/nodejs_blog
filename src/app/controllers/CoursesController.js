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

    // [GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((Course) => {
                res.render('courses/edit', {
                    Course: mongooseToObject(Course),
                });
            })
            .catch(next);
    }

    // [PUT] courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('/me/store/courses');
            })
            .catch(next);
    }

    // [DELETE] courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
