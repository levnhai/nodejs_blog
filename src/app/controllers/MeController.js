const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CoursesController {
    // [GET] me/courses/
    storeCourse(req, res, next) {
        Promise.all([Course.find({}), Course.countDocumentsDeleted({})])
            .then(([course, countDelete]) => {
                res.render('me/store-courses', {
                    countDelete,
                    course: mutipleMongooseToObject(course),
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
