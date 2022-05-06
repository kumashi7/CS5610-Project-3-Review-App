const express = require('express');
const router = express.Router();
const EntryModel = require('./model/entry.model');
const ReviewModel = require('./model/review.model');
const UserModel = require('./model/user.model');
const auth = require('./middlware/auth_middleware');

// create entry
router.post('/create', auth, async function(request, response) {
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
        response.status(401).send("Missing genre.");
    }

    try {
        UserModel.getUserByUserName(username)
            .then(user => {
                // console.log("--------- user: " + user.username);
                const entry = {
                    title: title,
                    release: release,
                    genre: genre,
                    content: content,
                    user: user._id
                }
                return EntryModel.createEntry(entry)
                .then(entry => {
                    response.status(200).send(entry);
                });
            })
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

// get entry
router.get('/:id', async function(request, response) {
    const entryId = request.params.id

    return EntryModel.getEntryById(entryId)
        .then(entry => {
                response.status(200).send(entry);
        })
        .catch(error => {
            response.status(400).send(error);
        })
});

// delete entry
router.delete('/:id', async function(request, response) {
    const entryId = request.params.id

    return EntryModel.deleteEntryById(entryId)
        .then(entry => {
            response.status(200).send(entry);
        })
        .catch(error => {
            response.status(400).send(error);
        })
});

// update entry
router.put('/:id', async function(request, response) {
    const entryId = request.params.id
    const title = request.body.title
    const release = request.body.release;
    const genre = request.body.genre;
    const content = request.body.content;


    return EntryModel.updateEntryById(entryId, title, release, genre, content)
        .then(() => {
            console.log("update success")
            response.status(200).send("update success");
        })
        .catch(error => {
            console.log("some error happend in put")
            console.log(error)
            response.status(400).send(error);
        })
});

// get all entries
router.get('/', function(request, response) {
    try {
        EntryModel.getAllEntry().then(function(entry) {
            response.status(200);
            return response.send(entry); 
        });
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

// Add review
router.post('/:id/review/', auth, function(request, response) {
    try {
        const content = request.body.content;
        const entryId = request.params.id;
        const username = request.username;

        if (!content) {
            response.status(401).send("Missing content.");
        }

        UserModel.getUserByUserName(username)
            .then(user => {
                console.log("--------- comment user: " + user.username);
                const review = {
                    content: content,
                    user: user._id
                }
                return EntryModel.addReviewToEntry(entryId, review);
            });
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

// get all reviews given an id
router.get('/:id/review/', function(request, response) {
    const entryId = request.params.id;
    return EntryModel.getEntryWithReviews(entryId)
    .then(entry => {
        response.status(200).send(entry.reviews);
    })
    .catch(error => {
        response.status(400).send(entry.reviews);
    })
});

// delete review
router.delete('/:id/:reviewid', async function(request, response) {
    try {
        const entryId = request.params.id;
        const reviewId = request.params.reviewid;

        ReviewModel.deleteReviewById(reviewId);
        console.log("deteled review inside");
        console.log(entryId);
        EntryModel.getEntryById(entryId)
                .then(entry => {
                    let oldReviews = entry.reviews;
                    let newReviews = oldReviews.filter(r => r._id != reviewId)
                    return EntryModel.updateEntryReviewById(entryId, newReviews);
                });
    } catch (error) {
        console.error(error.message);
        response.status(400).send(error);
    }
});

module.exports = router;