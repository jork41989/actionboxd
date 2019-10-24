import { connect } from 'react-redux';
import { getMostRecentReviews } from '../../actions/review_actions';
import ReviewsIndex from './reviews_index';


const mapDispatchToProps = dispatch => ({
    getMostRecentReviews: () => dispatch(getMostRecentReviews)
})

export default connect(null, mapDispatchToProps)(ReviewsIndex);