import React from 'react'
import ReviewsIndexItemContainer from './reviews_index_item_container';

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidUpdate(prevProps){
        if (this.props.movie.reviews.length !== prevProps.movie.reviews.length){
            // this.props.getMostRecentReviews();
            this.props.getMovie();
        }
    }

    render() {
       
        if(!this.props.movie.reviews){
            return <div>Loading...</div>
        }

        let reviewsList = this.props.movie.reviews.map(review => 
            <ReviewsIndexItemContainer key={review._id} movie={this.props.movie} review={review} />
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