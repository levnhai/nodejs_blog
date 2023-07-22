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
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [DELETE] courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    // [POST] courses/handle-form-actions
    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete': {
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => {
                        res.json(req.body);
                    })
                    .catch(next);
                break;
            }
            case 'restore': {
                Course.restore({ _id: { $in: req.body.courseIds } })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            }
            case 'forceDelete': {
                Course.deleteOne({ _id: { $in: req.body.courseIds } })
                    .then(() => {
                        res.redirect('back');
                    })
                    .catch(next);
                break;
            }

            default:
                res.send('lỗi rồi bạn ơi');
        }
    }

    // [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
