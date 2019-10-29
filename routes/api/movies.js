const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const validateMovieInput = require('../../validation/movie');

const Movie = require('../../models/Movie');

router.get('/', (req, res) => {
  Movie.find()
    .limit(12)
    .sort({title: -1})
    .populate({ path: 'reviews', select: 'rating' })
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ moviesnotfound: 'movies not found'}))
});


router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
  .populate('reviews')
  .populate({ path: 'actors', select: '_id name' })
    .then(movie => res.json(movie))
    .catch(err => 
      res.status(404).json({movienotfound: 'Movie not found with that id'}))
    });
    
    router.get('/search/:term', (req, res) => {
        Movie.find({ title: { $in: [new RegExp(`^${req.params.term}`, 'i'),
         new RegExp(`the ${req.params.term}`, 'i')]}})
        .limit(5)
        .sort({title: 1})
        .then(movies => res.json(movies))
        .catch(err => res.status(404).json({ moviesnotfound: 'movies not found'})) 
    });


router.post('/newMovie',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
  const { errors, isValid } = validateMovieInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newMovie = new Movie({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description,
    poster_url: req.body.poster_url,
    trailer_url: req.body.trailer_url,
    background_image_url: req.body.background_image_url
  })

  newMovie.save()
    .then(movie => res.json(movie))
    .catch(err => res.json(err));

});




module.exports = router;