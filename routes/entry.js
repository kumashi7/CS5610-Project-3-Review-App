
const express = require('express');
const router = express.Router();
const EntryModel = require('./model/entry.model');

// @route    POST /entry
// @desc     Create a post
router.post('/', async function(request, response) {
    const title = request.body.title;
    const release = request.body.release;
    const genre = request.body.genre;
    const content = request.body.content;
    const username = request.username;

    if (!title) {
        response.status(401).send("Missing entry title.");
    }
    if (!release) {
        response.status(401).send("Missing release year.");
    }
    if (!genre) {
        response.status(401).send("Missing release year.");
    }
    // TODO: auth
    try {
        // TODO: user find by username
        const entry = {
            title: title,
            release: release,
            genre: genre
        }
        const dbResponse = await EntryModel.createEntry(entry);
        response.status(200).send(dbResponse);
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

module.exports = router;