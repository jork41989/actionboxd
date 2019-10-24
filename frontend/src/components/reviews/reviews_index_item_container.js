import { connect } from 'react-redux';
import ReviewsIndexItem from './reviews_index_item';

const mapStateToProps = (state, ownProps) => {
    return({
        author: state.entities.users[ownProps.review.user_id]
    })
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsIndexItem);