import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_RECENT_REVIEWS = "RECEIVE_RECENT_REVIEWS";
export const RECEIVE_MOVIE_REVIEWS = "RECEIVE_MOVIE_REVIEWS";

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveMostRecentReviews = reviews => ({
    type: RECEIVE_RECENT_REVIEWS,
    reviews
});

export const getReview = id => dispatch => (
    ReviewsApiUtil.getReview(id)
        .then(review => dispatch(receiveReview(review)))
)

export const getMostRecentReviews = () => dispatch => (
    ReviewsApiUtil.getMostRecentReviews()
        .then(reviews => dispatch(receiveMostRecentReviews(reviews)))
)


//still need post, delete, patch
