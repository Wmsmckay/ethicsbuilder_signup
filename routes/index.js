const express = require('express');
const router = express.Router();

router
    .use('/', express.static('public'))
    .use('/api/signup', require('./signup'));


module.exports = router;