import {
    RECEIVE_MOVIE, 
    RECEIVE_MOVIES
} from '../actions/movie_actions';
import{
    RECEIVE_MOVIE_REVIEWS
} from '../actions/review_actions';

import merge from 'lodash/merge'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let movie;
    let moviesArr;
    let moviesObj;
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
        // case RECEIVE_MOVIE_REVIEWS:
            //not sure what movie reviews look like atm 
        // case for deleting a movie review 
        default:
            return state;
    }
}

export default moviesReducer;