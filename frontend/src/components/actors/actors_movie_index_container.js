import { connect } from 'react-redux';
import { getMovies } from '../../actions/movie_actions';
import ActorsMovieIndex from './actors_movie_index';

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    getMovies: () => dispatch(getMovies())
})


export default connect(mapStateToProps, mapDispatchToProps)(ActorsMovieIndex);
