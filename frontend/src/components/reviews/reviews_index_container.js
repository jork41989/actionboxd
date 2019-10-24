import { connect } from 'react-redux';
import { getMostRecentReviews } from '../../actions/review_actions';
import ReviewsIndex from './reviews_index';

const mapStateToProps = state => ({
    // reviews: Object.values(state.entities.reviews)
    //this is wrong 
})

const mapDispatchToProps = dispatch => ({
    getMostRecentReviews: () => dispatch(getMostRecentReviews)
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndex);