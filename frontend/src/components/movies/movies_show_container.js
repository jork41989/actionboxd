import { connect } from 'react-redux';
import MoviesShow from './movies_show';
import { getMovie } from '../../actions/movie_actions';
import { openModal } from '../../actions/modal_actions';
import { watchAMovie, unwatchAMovie } from '../../actions/users_actions'


const mapStateToProps = (state, ownProps) => {
    let currentUser = state.session.user ? state.entities.users[state.session.user.id] : {}

    return({
        movie: state.entities.movies[ownProps.match.params.movieId],
        currentUser: currentUser
    })
}

const mapDispatchToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    watchAMovie: (userId, payload) => dispatch(watchAMovie(userId, payload)),
    unwatchAMovie: (userId, payload) => dispatch(unwatchAMovie(userId, payload)),
    
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);