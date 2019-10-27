import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions';
import ActorsMovieIndex from './actors_movie_index';
import { watchAMovie, unwatchAMovie } from '../../actions/users_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies()),
    openModal: (modal) => dispatch(openModal(modal)),
    watchAMovie: (userId, payload) => dispatch(watchAMovie(userId, payload)),
    unwatchAMovie: (userId, payload) => dispatch(unwatchAMovie(userId, payload))
})


export default connect(mapStateToProps, mapDispatchToProps)(ActorsMovieIndex);
