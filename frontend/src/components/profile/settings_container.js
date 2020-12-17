import { connect } from "react-redux";
import { requestSingleUser } from "../../actions/users_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import Settings from "./settings.js";

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.userId;
  let user = state.entities.users[userId];
  let currentUser = state.session.user
    ? state.entities.users[state.session.user.id]
    : {};
  if (user) {
    user = Object.assign({}, user);
  }

  return {
    user: user,
    errors: state.errors,
    currentUser: currentUser,
    profilePicture: ownProps.profilePicture
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    requestSingleUser: userId => dispatch(requestSingleUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
