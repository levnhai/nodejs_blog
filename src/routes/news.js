const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:laptrinh', newsController.show);
router.get('/:haike', newsController.haike);
router.get('/', newsController.index);

module.exports = router;
