import { 
    RECEIVE_REVIEW, 
    RECEIVE_RECENT_REVIEWS 
} from '../actions/review_actions';
import merge from 'lodash/merge';


const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    let review;
    switch(action.type){
        case RECEIVE_REVIEW:
            review = action.review;
            newState = merge({}, state, { [review._id]: review });
            return newState;
        case RECEIVE_RECENT_REVIEWS:
            reviews = action.reviews;
            newState = merge({}, state, reviews)
            //check not being returned as array like movies was;
            return newState;
        default: 
            return state;
    }

}

export default reviewsReducer;