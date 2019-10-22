import * as MoviesApiUtil from '../util/movies_api_util';

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

// const receiveUserMovies = movies => ({
//     type: RECEIVE_USER_MOVIES,
//     movies
// });

export const getMovie = id => dispatch => (
    MoviesApiUtil.getMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const getMovies = () => dispatch => (
    MoviesApiUtil.getMovies()
        .then(movies => dispatch(receiveMovies(movies)))
)

// export const getUserMovies = (id) => dispatch => (
//     MoviesApiUtil.getUserMovies(id)
//         .then(movies => dispatch(receiveUserMovies(movies)))
// )