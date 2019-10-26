const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Movie = require('../../models/Movie');

router.get('/', (req, res) => {
  Movie.find()
    .sort({title: -1})
    .populate({ path: 'reviews', select: 'rating' })
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ moviesnotfound: 'movies not found'}))
});


router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
  .populate({ path: 'reviews', select: '_id user_id movie_id text rating date username' })
  // .populate({ path: 'actors', select: '_id name' })
  .exec()
    .then(movie => res.json(movie))
    .catch(err => 
      res.status(404).json({movienotfound: 'Movie not found with that id'}))
});


module.exports = router;