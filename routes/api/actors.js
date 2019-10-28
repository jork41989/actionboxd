const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Actor = require('../../models/Actor');

router.get('/:id', (req, res) => {
    Actor.findById(req.params.id)
        .populate({ path: 'movies', select: '_id title poster_url reviews' })
        .then(actor => res.json(actor))
        .catch(err =>
            res.status(404).json({ actornotfound: 'Actor not found with that id' }))
});

router.get('/search/:term', (req, res) => {
    Actor.find({ name: new RegExp(req.params.term, 'i') })
        .limit(2)
        .sort({ title: 1 })
        .then(actors => res.json(actors))
        .catch(err => res.status(404).json({ noactorfound: 'actor not found' }))
});


module.exports = router;