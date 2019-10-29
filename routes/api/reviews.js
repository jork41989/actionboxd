const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Movie = require('../../models/Movie');
const User = require('../../models/User');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/review');

//6 most recent reviews
router.get('/', (req, res) => {
  Review.find().limit(6)
    .sort({date: -1})
    .populate({path: 'movie_id', select: '_id title poster_url' })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(404).json({reviewsnotfound: 'No reviews to display'}))
});


router.get('/:id', (req, res) => {
  Review.findById(req.params.id)
  .then(review => res.json(review))
  .catch(err => 
    res.status(404).json({reviewnotfound: 'No review with that id'}))
})

router.get('/movies/:movie_id', (req, res) => {
  Review.find({movie_id: req.params.movie_id}).limit(10)
  .then(reviews => res.json(reviews))
  .catch(err => 
    res.status(404).json({nomoviereviews: 'No reviews for this movie yet'}))
})

router.post('/movies/:movie_id/:user_id',
   passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReviewInput(req.body);
    
    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newReview = new Review({
      text: req.body.text,
      user_id: req.params.user_id,
      movie_id: req.params.movie_id,
      text: req.body.text,
      rating: req.body.rating,
      username: req.body.username
    });
    
    newReview.save()
    .then(review => {
      Movie.findOneAndUpdate(
        {_id: req.params.movie_id},
        { $addToSet: { reviews: review._id } },
        {new: true})
        .then(movie => {
            User.findOneAndUpdate(
              {_id: req.params.user_id},
              { $addToSet: { authored_reviews: review._id } },
              {new: true})
          .then(user => {
            res.json(review)
          }
        )})
        .catch(err => {
          res.json(err)
      });
    })
    .catch(err => res.json(err));
  }
);

 
router.patch('/movies/:movie_id/:id', (req, res) => {
  const reviewId = req.params.id;
  const userId = req.body.user_id;
  const movieId = req.body.movie_id;
  passport.authenticate('jwt', { session: false }),
    Review.findByIdAndDelete({ _id: reviewId })
      .then(() => {
        return Movie.findOneAndUpdate(
          {_id: movieId},
          { $pull: { reviews: reviewId } },
          { upsert: true, new: true})
        })
        .then(() => {
          return User.findOneAndUpdate(
            { _id: userId },
            { $pull: { authored_reviews: reviewId } },
            { new: true })
          })
      .then((docs) => res.json({ deletion: 'successful deletion' }))
      .catch(err => res.json({ nodeletion: 'no deletion made' }))
});

// router.delete('/:id', (req, res) => {
//   passport.authenticate('jwt', { session: false }),
//   Review.findByIdAndDelete({_id: req.params.id})
//     .then((docs)=> res.json({deletion: 'successful deletion'}))
//     .catch(err => res.json({nodeletion: 'no deletion made'})) 
// });

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req,res) => {

    const { errors, isValid } = validateReviewInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Review.findOneAndUpdate({_id: req.params.id},
      {$set: {text: req.body.text, rating: req.body.rating}},
      { runValidators: true, new: true }
      )
      .then((docs) => res.json(docs))
      .catch(err =>
        res.status(404).json(err))
});


module.exports = router;