const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get("/test", (req, res) => res.json({ msg: "This is the users route" }));

router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  });
})

router.post('/register', (req, res) => {
  
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check to make sure nobody has already registered with a duplicate email
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        // Throw a 400 error if the email address already exists
        return res.status(400).json({ email: "A user has already registered with this address" })
      } else {
        // Otherwise create a new user
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(err => console.log(err));
          })
        })
      }
    })
})




router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

 

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json({ email: 'This user does not exist' });
      }

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = { id: user.id, username: user.username, email: user.email, watched_movies: user.watched_movies };

            jwt.sign(
              payload,
              keys.secretOrKey,
              // Tell the key to expire in one hour
              { expiresIn: 3600 },
              (err, token) => {
                res.json({
                  success: true,
                  token: 'Bearer ' + token,
                  username: user.username,
                  email: user.email,
                  watched_movies: user.watched_movies,
                  authored_reviews: user.authored_reviews
                });
              });
          } else {
            return res.status(400).json({ password: 'Incorrect password' });
          }
        })
    })
})


router.patch('/:user_id/watch', passport.authenticate('jwt', { session: false }), async  (req, res) => {
  const userId = req.params.user_id ;
  const newMovie = req.body.movie_id
  
  let updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { $addToSet: { watched_movies: newMovie } },
      { upsert: true, new: true },
      function (error, success) {
        if (error) {
          console.log(error);
        } else {
          console.log(success);
        }
      });
    return res.json({
      id: updatedUser.id,
      watched_movies: updatedUser.watched_movies
    });

});


//update users reviews array (insertion of new id)
router.patch('/:user_id/reviews/:review_id', (req, res) => {
  User.findOneAndUpdate(
    {_id: req.params.user_id},
    { $push: {authored_reviews: req.params.review_id }},
    { new: true })
     .then((docs) => res.json({
       authored_reviews: docs.authored_reviews 
      }))
     .catch(err =>
      res.status(404).json({ noreviewupdate: 'Not able to update array' }))
});

//update users review array (deletion of review id)
router.delete('/:user_id/reviews/:review_id', (req, res) => {
  User.findOneAndUpdate(
    {_id: req.params.user_id},
    { $pull: {authored_reviews: req.params.review_id}},
    {new: true})
    .then((docs) => res.json({
      authored_reviews: docs.authored_reviews
      }))
    .catch(err =>
      res.status(404).json({ noreviewupdate: 'Not able to update deletion in array' }))
});







router.get('/:user_id', (req, res) => {
  User.findById(req.params.user_id).populate({ path: 'watched_movies', select: '_id title poster_url'})
   .then(user => res.json({
      username: user.username,
      watched_movies: user.watched_movies,
      id: user.id,
    }))
    .catch(err => 
      res.status(404).json({nomoviesfound: 'no movies found for this user'}))
})

module.exports = router;