const express = require('express');
const router = express.Router();

const CoursesController = require('../app/controllers/CoursesController');

router.get('/create', CoursesController.create);
router.post('/store', CoursesController.store);
router.get('/:id/edit', CoursesController.edit);
router.delete('/:id', CoursesController.delete);
router.put('/:id', CoursesController.update);
router.delete('/:id/force', CoursesController.forceDelete);
router.patch('/:id/restore', CoursesController.restore);
router.get('/:slug', CoursesController.show);

module.exports = router;
