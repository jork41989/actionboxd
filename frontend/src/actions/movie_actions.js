import * as MoviesApiUtil from '../util/movies_api_util';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

export const getMovie = id => dispatch => (
    MoviesApiUtil.getMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const getMovies = () => dispatch => (
    MoviesApiUtil.getMovies()
        .then(movies => dispatch(receiveMovies(movies)))
)
