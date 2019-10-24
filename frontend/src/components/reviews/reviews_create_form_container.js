import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { writeReview } from '../../actions/review_actions';
import ReviewsCreateForm from './reviews_create_form';


const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.location.pathname.split("/")[2];
    return({
        movie: state.entities.movies[movieId],
        currentUser: state.session.user,
        errors: state.errors.review
    })

}

const mapDispatchToProps = dispatch => ({
//errors
    closeModal: () => dispatch(closeModal()),
    writeReview: (review, movieId, userId) => dispatch(writeReview(review, movieId, userId))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsCreateForm));