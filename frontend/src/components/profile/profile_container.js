import { connect } from 'react-redux';
import { requestSingleUser } from '../../actions/users_actions'
import { openModal } from "../../actions/modal_actions";
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  let user = state.entities.users[userId];
  let currentUser = state.session.user ? state.entities.users[state.session.user.id] : {};
  if (user) {
    user = Object.assign({}, user)
  }
  
  return {
    user: user,
    errors: state.errors,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  return {
    openModal: modal => dispatch(openModal(modal)),
    requestSingleUser: userId => dispatch(requestSingleUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
