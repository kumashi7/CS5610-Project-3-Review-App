
const express = require('express');
const router = express.Router();

router.get('/entry/:id/review/', function(request, response) {
    try {
        console.log("XXXXXXXXXXXXX");
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

// create review to an entry
router.post('/entry/:id/review/', function(request, response) {
    try {
        const content = request.body.content;
        if (!content) {
            response.status(401).send("Missing content.");
        }
        console.log(request.params.id);
        console.log(content);
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

module.exports = router;