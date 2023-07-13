const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./courses');

function route(app) {
    app.use('/profile', newRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter);
}

module.exports = route;
