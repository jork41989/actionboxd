import React from 'react'
import ReviewsIndexItemContainer from './reviews_index_item_container';

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
       
        if(!this.props.movie.reviews){
            return <div>Loading...</div>
        }

        let reviewsList = this.props.movie.reviews.map(review => 
            <li key={review._id}>
                <ReviewsIndexItemContainer key={review.id} movie={this.props.movie} review={review} />
            </li>
            );
        return (
            <div className="reviews-index-container">
                <ul className="reviews-list">
                    {reviewsList}
                </ul>
            </div>
        );
    }
}

export default ReviewsIndex;