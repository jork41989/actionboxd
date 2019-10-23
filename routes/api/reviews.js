const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/review');

//5 most recent reviews
router.get('/', (req, res) => {
  Review.find().limit(5)
    .sort({date: -1})//.populate({path: 'movie_id', select: '_id title poster_url' })
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

// router.post('/',
//   passport.authenticate('jwt', {session: false}),
//   (req, res) => {
//     // const {errors, isValid} = validateReviewInput(req.body);

//     // if(!isValid){
//     //   return res.status(404).json(errors);
//     // }

//     const newReview = new Review({
//       user_id: req.user.id,
//       movie_id: req.movie.id,
//       text: req.body.text,
//       // rating: req.body.rating
//     });
//     console.log(newReview);
//     newReview.save().then(review => res.json({review})).catch(err => res.json(err))
//   }
// );
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
      rating: req.body.rating

    });

    newReview.save()
    .then(review => res.json(review))
    .catch(err => res.json(err));
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
    {text: review.text, review: review.rating},
    {new: true})
    .then((docs) => res.json(docs))
    .catch(err =>
      res.status(404).json({ noreviewupdate: 'Not able to update' }))
});


module.exports = router;