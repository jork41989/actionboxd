import { connect } from 'react-redux';
import { writeReview } from '../../actions/review_actions';
import ReviewsCreateForm from './reviews_create_form';


const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
//errors
    writeReview: review => dispatch(writeReview(review))
})


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsCreateForm);