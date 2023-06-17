const newRouter = require('./news')
const siteRouter = require('./site')

function route (app) {

    app.use('/profile', newRouter)
    app.use('/', siteRouter)
      
}

module.exports = route;