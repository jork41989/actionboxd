import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { newActorAdd } from '../../actions/actor_actions'
import ActorForm from './actor_form'
import { getMovieList } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    errors: state.errors.actor,
    results: state.ui.searchResults
  })


}


const mapDispatchToProps = dispatch => ({
  //errors
  closeModal: () => dispatch(closeModal()),
  newActorAdd: (actor) => dispatch(newActorAdd(actor)),
  getMovieList: term => dispatch(getMovieList(term))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ActorForm));