import { connect } from 'react-redux';
import { requestSingleUser } from '../../actions/users_actions'
import ProfileReviewsSample from './profile_review_sample'
import { openModal } from '../../actions/modal_actions';
import { deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  let currentUser = state.session.user ? state.entities.users[state.session.user.id] : {};

  return {
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    deleteReview: (review, payload) => dispatch(deleteReview(review, payload)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileReviewsSample);