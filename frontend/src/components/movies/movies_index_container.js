import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions'
import MoviesIndex from './movies_index';

const mapStateToProps = (state) => {
    return ({movies: Object.values(state.entities.movies)} )
} 

const mapDispatchToProps = (dispatch) => ({
    getMovies: () => dispatch(getMovies())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesIndex);