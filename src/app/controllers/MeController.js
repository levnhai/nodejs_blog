const Course = require('../models/Course');
const {
    mutipleMongooseToObject,
    mongooseToObject,
} = require('../../util/mongoose');

class CoursesController {
    // [GET] me/courses/
    storeCourse(req, res, next) {
        var courseQuery = Course.find({});

        if (req.query.hasOwnProperty('_soft')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type,
            });
        }
        Promise.all([courseQuery, Course.countDocumentsWithDeleted({})])
            .then(([Course, countDelete]) => {
                res.render('me/store-courses', {
                    countDelete,
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
