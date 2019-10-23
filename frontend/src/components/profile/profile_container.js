import { connect } from 'react-redux';
import { requestSingleUser } from '../../actions/users_actions'
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps)
  const userId = parseInt(ownProps.match.params.id);
  let user = state.entities.users[userId];

  if (user) {
    user = Object.assign({}, user)
  }
  
  return {
    user: user,
    errors: state.errors,
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = parseInt(ownProps.match.params.id);
  return {
    requestSingleUser: (userId) => dispatch(requestSingleUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
