import { connect } from 'react-redux';
import MoviesShow from './movies_show';
import { getMovie } from '../../actions/movie_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    return({
        movie: state.entities.movies[ownProps.match.params.movieId]
    })
}

const mapDispatchToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id)),
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);