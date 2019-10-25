import { connect } from 'react-redux';
import { getMostRecentReviews } from '../../actions/review_actions';
import { getMovie } from '../../actions/movie_actions';
import ReviewsIndex from './reviews_index';


const mapDispatchToProps = dispatch => ({
    getMovie: (id) => dispatch(getMovie(id))
    // getMostRecentReviews: () => dispatch(getMostRecentReviews)
})

export default connect(null, mapDispatchToProps)(ReviewsIndex);