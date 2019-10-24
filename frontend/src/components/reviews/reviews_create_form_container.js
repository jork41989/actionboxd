import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { writeReview } from '../../actions/review_actions';
import ReviewsCreateForm from './reviews_create_form';


const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.location.pathname.split("/")[2];
    return({
        movie: state.entities.movies[movieId]
    })

}

const mapDispatchToProps = dispatch => ({
//errors
    closeModal: () => dispatch(closeModal()),
    writeReview: review => dispatch(writeReview(review))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsCreateForm));