import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import AdminPortal from './admin_portal'

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user
  })
}

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal) => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPortal)