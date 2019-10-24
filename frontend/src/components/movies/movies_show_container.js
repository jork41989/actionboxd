import { connect } from 'react-redux';
import MoviesShow from './movies_show';
import { getMovie } from '../../actions/movie_actions';
import { openModal } from '../../actions/modal_actions';
import { updateAuser } from '../../actions/users_actions'


const mapStateToProps = (state, ownProps) => {
    return({
        movie: state.entities.movies[ownProps.match.params.movieId],
        currentUser: state.session.user
    })
}

const mapDispatchToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    updateAuser: (userId, payload) => dispatch(updateAuser(userId, payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);