import { 
    RECEIVE_REVIEW, 
    RECEIVE_RECENT_REVIEWS, 
    REMOVE_REVIEW,
    UPDATE_REVIEW
} from '../actions/review_actions';
import { RECEIVE_MOVIE } from '../actions/movie_actions'
import merge from 'lodash/merge';


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let review;
    let reviews;
    let reviewsArr;
    let reviewsObj;
    switch(action.type){
        case RECEIVE_REVIEW:
            review = action.review;
            newState = merge({}, state, { [review._id]: review });
            return newState;
        case RECEIVE_RECENT_REVIEWS:
            reviewsArr = action.reviews;
            reviewsObj = {};
            reviewsArr.forEach(review => {
                reviewsObj[review._id] = review
            });
            newState = merge({}, state, reviewsObj)
            return newState;
        case RECEIVE_MOVIE:
            reviewsArr = action.movie.data.reviews;
            reviewsObj = {};
            reviewsArr.forEach(review => {
                reviewsObj[review._id] = review
            });
            newState = merge({}, state, reviewsObj);
            return newState;
        case REMOVE_REVIEW:
            review = action.review;
            newState = merge({}, state);
            delete newState[review._id];
            return newState;
        case UPDATE_REVIEW:
            review = action.review;
            newState = merge({}, state);
            newState[review._id] = review;
            return newState;
        default: 
            return state;
    }

}

export default reviewsReducer;