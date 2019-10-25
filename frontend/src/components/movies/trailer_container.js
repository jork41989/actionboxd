import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import Trailer from './trailer';
import { getMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.movieId;
    return({
        movie: state.entities.movies[movieId]
    })

}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovie: (id) => dispatch(getMovie(id)),
        closeModal: () => dispatch(closeModal())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trailer));