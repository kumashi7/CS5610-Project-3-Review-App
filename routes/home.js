const express = require('express');
const router = express.Router();
const EntryModel = require('./model/entry.model');


router.get('/', function(request, response) {
    try {
        EntryModel.getAllEntry().then(function(entry) {
            console.log(" entry")
            console.log(entry)
        });
        console.log("all entry")
        console.log(entryList)
        for (var i = 0; i < entryList.length; i++) { 
            console.log(entryList[i]); 
        }
        response.status(200);
        return response.send(entryList); 
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
})

module.exports = router;