import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    users: usersReducer,
    movies: moviesReducer
})
