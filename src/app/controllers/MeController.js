const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CoursesController {
    // [GET] me/courses/
    storeCourse(req, res, next) {
        Course.find({})
            .then((Course) => {
                res.render('me/store-courses', {
                    Course: mutipleMongooseToObject(Course),
                });
            })
            .catch(next);
    }

    // [GET] me/courses/trash
    trashCourse(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then((Course) => {
                res.render('me/trash-courses', {
                    Course: mutipleMongooseToObject(Course),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
