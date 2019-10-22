const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Movie = require('../../models/Movie');

router.get('/', (req, res) => {
  Movie.find()
    .sort({title: -1})
    .then(movies => res.json(movies))
    .catch(err => res.status(404).json({ moviesnotfound: 'movies not found'}))
});
// router.get('/user/:user_id', (req, res) => {
//   Movie.find({user: req.params.user_id})
//     .sort({date: -1})
//     .then(movies => res.json(movies))
//     .catch(err => 
//       res.status(404).json({moviesnotfound: 'this user does not have any movies to show'}))
// });

router.get('/:id', (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => res.json(movie)
    .catch(err => 
      res.status(404).json({movienotfound: 'Movie not found with that id'})))
});


module.exports = router;