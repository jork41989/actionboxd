import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import ReviewsIndexItem from './reviews_index_item';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        currentUser: state.session.user
    })
}

const mapDispatchToProps = (dispatch) => ({
    deleteReview: (review, payload) => dispatch(deleteReview(review, payload)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexItem);