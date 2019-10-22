import {
    RECEIVE_MOVIE, 
    RECEIVE_MOVIES,
    RECEIVE_USER_MOVIES
} from '../actions/movie_actions';
import merge from 'lodash/merge'

const moviesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let movie;
    switch(action.type){
        case RECEIVE_MOVIE:
            movie = action.movie
            newState = merge({}, state, { [movie.id]: action.movie });
            return newState;
        case RECEIVE_MOVIES:
            newState = merge({}, state, action.movies);
            return newState; 
        case RECEIVE_USER_MOVIES:
            newState = merge({}, state, action.movies);
            return newState;
        default:
            return state;
    }
}

export default moviesReducer;