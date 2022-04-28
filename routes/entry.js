
const express = require('express');
const router = express.Router();

// '/entry/'
router.get('/', function(request, response) {
    response.status(200);
})

module.exports = router;