import React from 'react';
import './reviews_index_item.css';

class ReviewsIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="review-item-container">
                <div className="review-item-avatar">
                </div>

                <div className="review-item-info-container">
                    <div className="review-item-header">
                        <div className="review-item-header-extended">
                            Review by {this.props.author} <p className="review-username"> USERNAME HERE</p>
                        </div>
                        <div>
                        {/* {review.rating.$numberDecimal} */}
                        </div>
                    </div>
                    <div className="review-item-body">
                        {this.props.review.text}
                    </div>
                </div>
            </div>
        )
    }
}


export default ReviewsIndexItem