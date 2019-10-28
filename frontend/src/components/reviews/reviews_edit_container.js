import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { updateReview } from '../../actions/review_actions';
import ReviewsEdit from './reviews_edit';


const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.movieId;
    return ({
        movie: state.entities.movies[movieId],
        currentUser: state.session.user,
        errors: state.errors.review
    })

}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    updateReview: (review) => dispatch(updateReview(review))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsEdit));