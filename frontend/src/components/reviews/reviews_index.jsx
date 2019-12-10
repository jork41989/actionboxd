import React from 'react'
import ReviewsIndexItemContainer from './reviews_index_item_container';

class ReviewsIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
       
        if(!this.props.movie.reviews){
            return <div>
                <div class="loading">Loading...</div>
                    <div class="lds-ellipsis">
                        <div style={{ backgroundColor: "rgb(255,128,0)" }}>
                        </div><div style={{ backgroundColor: "rgb(0,224,84)" }}>
                        </div><div style={{ backgroundColor: "rgb(64,188,244)" }}></div>
                    </div>
                </div>
        }

        let sortedReviews = this.props.movie.reviews.sort((a, b) => (a.date < b.date) ? 1 : -1);
        let reviewsList = sortedReviews.map(review => 
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