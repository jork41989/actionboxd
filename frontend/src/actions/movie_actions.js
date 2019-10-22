import * as MoviesApiUitl from '../util/movies_api_util';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_USER_MOVIES = "RECEIVE_USER_MOVIES";

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

const receiveUserMovies = movies => ({
    type: RECEIVE_MOVIE,
    movies
});

export const getMovie = id => dispatch => (
    MoviesApiUitl.getMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const getMovies = () => dispatch => (
    MoviesApiUitl.getMovies()
        .then(movies => dispatch(receiveMovies(movies)))
)

export const getUserMovies = (id) => dispatch => (
    MoviesApiUitl.getUserMovies(id)
        .then(movies => dispatch(receiveUserMovies(movies)))
)