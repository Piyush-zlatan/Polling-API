const express = require('express');
const router = express.Router();


const optionController = require('../../controllers/api/option_controller');

//To delete option
router.delete('/:id/delete',optionController.delete);

//To increment vote
router.post('/:id/add_vote',optionController.addVote);


module.exports = router;