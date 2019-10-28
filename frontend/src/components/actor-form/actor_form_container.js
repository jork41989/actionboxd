import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { newActorAdd } from '../../actions/actor_actions'
import ActorForm from './actor_form'

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    errors: state.errors.actor
  })


}


const mapDispatchToProps = dispatch => ({
  //errors
  closeModal: () => dispatch(closeModal()),
  newActorAdd: (actor) => dispatch(newActorAdd(actor))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorForm));