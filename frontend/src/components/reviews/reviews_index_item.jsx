import React from 'react';
import './reviews_index_item.css';

class ReviewsIndexItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let rating;
    


        if (this.props.review.rating.$numberDecimal){
            switch (this.props.review.rating.$numberDecimal){
                case "1.0":
                    rating = <span className="green1"></span>
                    break;
                case "2.0":
                    rating = <span className="green2"></span>
                    break;
                case "3.0": 
                    rating = <span className="green3"></span>
                    break;
                case "4.0": 
                    rating = <span className="green4"></span>
                    break;
                case "5.0":
                    rating = <span className="green5"></span>
                    break;
                default: 
                    rating = "";
            }
        }

        debugger;
        debugger;
        return (
            <div className="review-item-container">
                <div className="review-item-avatar">
                </div>

                <div className="review-item-info-container">
                    <div className="review-item-header">
                        <div className="review-item-header-extended">
                            Review by <p className="review-username">{this.props.review.username}</p>{this.props.review.rating.$numberDecimal}
                            {rating}
                        </div>
                        <div>
                        
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