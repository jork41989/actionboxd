import { RECEIVE_REVIEW_ERRORS, RECEIVE_REVIEW, UPDATE_REVIEW } from '../actions/review_actions';

const _nullErrors = [];

const ReviewErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW_ERRORS:
            return action.errors;
        case RECEIVE_REVIEW:
            return _nullErrors;
        case UPDATE_REVIEW:
            return _nullErrors;
        default:
            return state;
    }
};

export default ReviewErrorsReducer;