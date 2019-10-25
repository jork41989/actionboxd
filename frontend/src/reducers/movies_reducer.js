import {
    RECEIVE_MOVIE, 
    RECEIVE_MOVIES
} from '../actions/movie_actions';
import{
    RECEIVE_REVIEW,
    REMOVE_REVIEW
} from '../actions/review_actions';

import merge from 'lodash/merge'

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
            newState = merge({}, state, { [movie._id]: movie });
            return newState;
        case RECEIVE_MOVIES:
            moviesArr = action.movies.data;
            moviesObj = {};
            moviesArr.forEach(movie => {
                moviesObj[movie._id] = movie
            })
            newState = merge({}, state, moviesObj);
            return newState; 
        case RECEIVE_REVIEW:
            review = action.review;
            movieId = review.movie_id;
            newState = merge({}, state);
            movie = newState[movieId];
            movie.reviews.push(review._id);
            return newState;
        case REMOVE_REVIEW:
            review = action.review;
            movieId = review.movie_id;
            newState = merge({}, state);
            movie = newState[movieId];
            debugger;
            delete movie.reviews[review._id];
            return newState;
        //add case for remove review 
        default:
            return state;
    }
}

export default moviesReducer;