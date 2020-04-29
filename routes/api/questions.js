const express = require('express');
const router = express.Router();

const questionController = require('../../controllers/api/question_controller');

//To create question
router.post('/create',questionController.create);

//TO delete question
router.delete('/:id/delete',questionController.delete);

//To create options for question
router.post('/:id/options/create',questionController.createOptions);

//To view question
router.get('/:id',questionController.view);
module.exports = router;