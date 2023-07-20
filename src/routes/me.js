const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/store/courses', MeController.storeCourse);
router.get('/store/trash', MeController.trashCourse);

module.exports = router;
