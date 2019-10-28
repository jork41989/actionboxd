import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { newMovieAdd } from '../../actions/movie_actions'
import MovieForm from './movie_form'


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.user,
    errors: state.errors.movie
  })


}


const mapDispatchToProps = dispatch => ({
  //errors
  closeModal: () => dispatch(closeModal()),
  newMovieAdd: (movie) => dispatch(newMovieAdd(movie))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieForm));