const express = require('express');
const router = express.Router();

console.log('Inside Router');

router.use('/',require('./api'));

//for any further router, access from here
//router.use('/routerName',require('./routerfile'))

module.exports = router;