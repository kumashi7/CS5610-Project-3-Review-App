const express = require('express');
const router = express.Router();
const EntryModel = require('./model/entry.model');

// @route    Get /home
// @desc     Get entries
router.get('/', function(request, response) {
    try {
        EntryModel.getAllEntry().then(function(entry) {
            // console.log("---------------------entry");
            // console.log(entry);
            response.status(200);
            return response.send(entry); 
        });
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
})

module.exports = router;