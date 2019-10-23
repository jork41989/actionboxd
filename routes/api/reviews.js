const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/valid-text');

//5 most recent reviews
router.get('/', (req, res) => {
  Review.find()
    .sort({date: -1}).limit(5)
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

router.post('/',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const {errors, isValid} = validateReviewInput(req.body);

    if(!isValid){
      return res.status(404).json(errors);
    }

    const newReview = new Review({
      user_id: req.user.id,
      movie_id: req.movie.id,
      text: req.body.text,
      rating: req.body.rating
    });
    newReview.save().then(review => res.json({review}))
  }
);

router.delete('/:id', (req, res) => {
  Review.findOneAndRemove({id: req.params.id}, 
    function (error, success) {
      if (error) {
        console.log(error)
      } else {
        console.log(success)
      }
    });
});

router.patch('/:id', (req,res) => {
  Review.findByIdAndUpdate({id: req.params.id},
    {$set: {text: review.text}},
    {new: true})
    .then((docs) => res.json(docs))
    .catch(err =>
      res.status(404).json({ noreviewupdate: 'Not able to update' }))
});


module.exports = router;