import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import AboutDev from './about_dev'

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutDev);