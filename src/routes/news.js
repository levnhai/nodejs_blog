const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewsController')

router.use('/laptrinh', newsController.show)
router.use('/haike', newsController.haike)
router.use('/', newsController.index)


module.exports = router;