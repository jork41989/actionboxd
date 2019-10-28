import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_RECENT_REVIEWS = "RECEIVE_RECENT_REVIEWS";
export const RECEIVE_MOVIE_REVIEWS = "RECEIVE_MOVIE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
// export const UPDATE_REVIEW = "UPDATE_REVIEW";

const receiveReview = review => {
    return({
        type: RECEIVE_REVIEW,
        review
    })
};

const receiveMostRecentReviews = reviews => ({
    type: RECEIVE_RECENT_REVIEWS,
    reviews
});

const receiveReviewErrors = errors => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

const removeReview = review => ({
    type: REMOVE_REVIEW,
    review
})

// const updateReview = review => ({
//     type: UPDATE_REVIEW,
//     review
// })

export const getReview = id => dispatch => (
    ReviewsApiUtil.getReview(id)
        .then(review => dispatch(receiveReview(review)))
)

export const getMostRecentReviews = () => dispatch => (
    ReviewsApiUtil.getMostRecentReviews()
        .then(reviews => dispatch(receiveMostRecentReviews(reviews.data)))
)

export const updateReview = (review) => dispatch => (
    ReviewsApiUtil.updateReview(review)
        .then(review => dispatch(receiveReview(review.data)))
)

export const deleteReview = (review, payload) => dispatch => (
    ReviewsApiUtil.deleteReview(review.movie_id, review._id, payload)
        .then(() => dispatch(removeReview(review)))
)

export const writeReview = (review, movieId, userId) => dispatch => {
    return ReviewsApiUtil.writeReview(review, movieId, userId)
        .then(review => dispatch(receiveReview(review.data)),
            err => dispatch(receiveReviewErrors(err.response.data)))
}
