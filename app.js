const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


const users = require("./routes/api/users");

const movies = require("./routes/api/movies")
const reviews = require('./routes/api/reviews');
const actors = require('./routes/api/actors');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);

app.use('/api/movies', movies);
app.use('/api/reviews', reviews);
app.use('/api/actors', actors);
app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));