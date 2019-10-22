import { connect } from 'react-redux';
import MoviesShow from './movies_show';
import { getMovie } from '../../actions/movie_actions';

const mapStateToProps = (state, ownProps) => ({
    movie: state.entities.movies[ownProps.match.params.movieId]
})

const mapDispatchToProps = (dispatch) => ({
    getMovie: (id) => dispatch(getMovie(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesShow);