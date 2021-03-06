import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getMovie } from '../../actions/movie_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = (state, ownProps) => {
    let movieId = ownProps.history.location.pathname.split("/")[2]
    return({
        movie: state.entities.movies[movieId]
    })
}

const mapDispatchToProps = dispatch => ({
    getMovie: (id) => dispatch(getMovie(id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex));