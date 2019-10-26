import { combineReducers } from 'redux';
import moviesReducer from './movies_reducer';
import usersReducer from './users_reducer';
import reviewsReducer from './reviews_reducer';
import actorsReducer from './actors_reducer';

export default combineReducers({
    users: usersReducer,
    movies: moviesReducer,
    reviews: reviewsReducer,
    actors: actorsReducer
})
