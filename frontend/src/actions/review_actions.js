import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const RECEIVE_RECENT_REVIEWS = "RECEIVE_RECENT_REVIEWS";
export const RECEIVE_MOVIE_REVIEWS = "RECEIVE_MOVIE_REVIEWS";

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
});

const receiveRecentReviews = reviews => ({
    type: RECEIVE_RECENT_REVIEWS,
    reviews
});

const receiveMovieReviews = reviews => ({
    type: RECEIVE_MOVIE_REVIEWS,
    reviews
});

export const getReview = id => dispatch => (
    ReviewsApiUtil.getReview(id)
        .then(review => dispatch(receiveReview(review)))
)

export const getRecentReviews = () => dispatch => (
    ReviewsApiUtil.getReviews()
        .then(reviews => dispatch(receiveRecentReviews(reviews)))
)

export const getMovieReviews = (movieId) => dispatch => (
    ReviewsApiUtil.getReviews(movieId)
        .then(reviews => dispatch(receiveMovieReviews(reviews)))
)

//still need post, delete, patch
