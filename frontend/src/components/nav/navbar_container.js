import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { getTheCurUser } from '../../actions/users_actions';

import NavBar from './navbar';

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  getTheCurUser: () => dispatch(getTheCurUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);