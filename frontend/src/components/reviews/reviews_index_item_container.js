import { connect } from 'react-redux';
import { deleteReview } from '../../actions/review_actions';
import ReviewsIndexItem from './reviews_index_item';

const mapStateToProps = (state, ownProps) => {
    return({
        // author: state.entities.users[ownProps.review.user_id],
        currentUser: state.session.user
    })
}

const mapDispatchToProps = (dispatch) => ({
    deleteReview: (review, payload) => dispatch(deleteReview(review, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexItem);