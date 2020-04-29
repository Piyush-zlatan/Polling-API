const express = require('express');
const router = express.Router();

console.log('Inside Api Router');

router.get('/questions',require('./questions'));
router.get('/options',require('./options'));

//for any further router, access from here
//router.use('/routerName',require('./routerfile'))

module.exports = router;