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
    let movieArr;
    switch(action.type){
        case RECEIVE_MOVIE:
            movie = action.movie.data
            newState = merge({}, state, { [movie._id]: movie });
            return newState;
        case RECEIVE_MOVIES:
            movieArr = action.movies.data;
            newState = merge({}, state, movieArr);
            debugger;
            return newState; 
        // case RECEIVE_USER_MOVIES:
        //     newState = merge({}, state, action.movies.data);
        //     return newState;
        default:
            return state;
    }
}

export default moviesReducer;