import {
    RECEIVE_MOVIE, 
    RECEIVE_MOVIES
} from '../actions/movie_actions';
import{
    RECEIVE_REVIEW,
    REMOVE_REVIEW,
    UPDATE_REVIEW
} from '../actions/review_actions';
import { RECEIVE_ACTOR } from '../actions/actor_actions';


const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let movie;
    let moviesArr;
    let moviesObj;
    let review;
    let movieId;
    switch(action.type){
        case RECEIVE_MOVIE:
            movie = action.movie.data
            newState = Object.assign({}, state, { [movie._id]: movie });
            return newState;
        case RECEIVE_MOVIES:
            moviesArr = action.movies.data;
            moviesObj = {};
            moviesArr.forEach(movie => {
                moviesObj[movie._id] = movie
            })
            newState = Object.assign({}, state, moviesObj);
            return newState; 
        case RECEIVE_ACTOR: 
            moviesArr = action.actor.movies;
            moviesObj = {};
            if (moviesArr){
                moviesArr.forEach(movie => {
                    moviesObj[movie._id] = movie
                })
                newState = Object.assign({}, state, moviesObj);
                return newState;
            } else {
                return state
            }
        case RECEIVE_REVIEW:
            review = action.review;
            movieId = review.movie_id;
            newState = Object.assign({}, state);
            movie = newState[movieId];
            movie.reviews.push(review._id);
            return newState;
        case UPDATE_REVIEW:
            review = action.review;
            movieId = review.movie_id;
            newState = Object.assign({}, state);
            movie = newState[movieId];
            movie.reviews = movie.reviews.filter(rev => rev._id !== review._id);
            movie.reviews.push(review);
            return newState;
        case REMOVE_REVIEW:
            review = action.review;
            movieId = review.movie_id;
            newState = Object.assign({}, state);
            movie = newState[movieId];
            movie.reviews = movie.reviews.filter(rev => rev._id !== review._id);
            return newState;
        default:
            return state;
    }
}

export default moviesReducer;