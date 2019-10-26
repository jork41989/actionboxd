const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Actor = require('../../models/Actor');

router.get('/:id', (req, res) => {
    Actor.findById(req.params.id)
        .populate({ path: 'movies', select: '_id title poster_url' })
        .then(actor => res.json(actor))
        .catch(err =>
            res.status(404).json({ actornotfound: 'Actor not found with that id' }))
});


module.exports = router;