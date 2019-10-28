const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const validateActorInput = require('../../validation/actor');
const Actor = require('../../models/Actor');
const passport = require('passport');

router.get('/:id', (req, res) => {
    Actor.findById(req.params.id)
        .populate({ path: 'movies', select: '_id title poster_url reviews' })
        .then(actor => res.json(actor))
        .catch(err =>
            res.status(404).json({ actornotfound: 'Actor not found with that id' }))
});

router.get('/search/:term', (req, res) => {
    Actor.find({ name: new RegExp(`^${req.params.term}`, 'i') })
        .limit(2)
        .sort({ title: 1 })
        .then(actors => res.json(actors))
        .catch(err => res.status(404).json({ noactorfound: 'actor not found' }))
});


router.post('/newActor',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        const { errors, isValid } = validateActorInput(req.body);

        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newActor = new Movie({
            name: req.body.name,
            bio: req.body.bio,
            description: req.body.description,
            photo_url: req.body.photo_url
        })

        newActor.save()
            .then(actor => res.json(actor))
            .catch(err => res.json(err));

    });

module.exports = router;