import * as MoviesApiUtil from '../util/movies_api_util';

export const RECEIVE_MOVIE = "RECEIVE_MOVIE";
export const RECEIVE_MOVIES = "RECEIVE_MOVIES";
export const RECEIVE_MOVIE_ERRORS = 'RECEIVE_MOVIE_ERRORS'

const receiveMovie = movie => ({
    type: RECEIVE_MOVIE,
    movie
});

const receiveMovies = movies => ({
    type: RECEIVE_MOVIES,
    movies
});

export const receiveErrors = errors => ({
    type: RECEIVE_MOVIE_ERRORS,
    errors
});

export const getMovie = id => dispatch => (
    MoviesApiUtil.getMovie(id)
        .then(movie => dispatch(receiveMovie(movie)))
)

export const getMovies = () => dispatch => (
    MoviesApiUtil.getMovies()
        .then(movies => dispatch(receiveMovies(movies)))
)

export const newMovieAdd = (data) => dispatch => (
    MoviesApiUtil.newMovie(data)
        .then(movie => dispatch(receiveMovie(movie)), 
        err => (
                    dispatch(receiveErrors(err.response.data))
                )
            )
);
