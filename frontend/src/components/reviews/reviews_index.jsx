import React from 'react'
import ReviewsIndexItem from './reviews_index_item';

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
       
        if(!this.props.movie.reviews){
            return <div>Loading...</div>
        }

        let reviewsList = this.props.movie.reviews.map(review => 
            <ReviewsIndexItem key={review._id} movie={this.props.movie} review={review} />
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