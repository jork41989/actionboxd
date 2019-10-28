import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { writeReview } from '../../actions/review_actions';
import ReviewsForm from './reviews_form';


const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.movieId;
    return({
        movie: state.entities.movies[movieId],
        currentUser: state.session.user,
        errors: state.errors.review,
        review: {
                text: "",
                rating: "",
        },
    })

}

const mapDispatchToProps = dispatch => ({
//errors
    closeModal: () => dispatch(closeModal()),
    writeReview: (review, movieId, userId) => dispatch(writeReview(review, movieId, userId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsForm));