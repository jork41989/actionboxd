import React from 'react';
import { Link } from 'react-router-dom';
import './reviews_index_item.css';
import './reviews_edit.css';

class ReviewsIndexItem extends React.Component{
    constructor(props){
        super(props)

        this.confirmDelete = this.confirmDelete.bind(this);
        this.trash = this.trash.bind(this);
        this.edit = this.edit.bind(this);
    }

    confirmDelete(){
        let result = window.confirm("Delete this review permanently?")
        if (result){
            this.props.deleteReview(this.props.review, {movie_id: this.props.review.movie_id, user_id: this.props.review.user_id})
        }
    }

    edit(){
        if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0) {
            if (this.props.currentUser.username === this.props.review.username) {
                return (
                    <div
                        onClick={() => this.props.openModal({ modal: 'edit-review', reviewId: this.props.review._id, movieId: this.props.review.movie_id})}
                        className="edit-pen"
                    >
                    </div>)
            } else {
                return (<div></div>)
            }
        } else {
            return (<div></div>)
        }

    }

    userLink(){

    }

    trash(){ 
        if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0) {
            if(this.props.currentUser.username === this.props.review.username){
           return ( <i
                onClick={this.confirmDelete}
                className="far fa-trash-alt"
           ></i> )
            } else {
                return ( <div></div> )
            }
        } else {
            return (<div></div>)
        }
    
}
    render(){
        let rating;
      

        if (this.props.review.rating){
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

        let UserI = this.props.review.user_id ? this.props.review.user_id._id : null
        
        return (
            <div className="review-item-container">
                <div className="review-item-avatar">
                </div>

                <div className="review-item-info-container">
                    <div className="review-item-header">
                        <div className="review-item-header-extended">
                            
                            Review by <Link to={`/users/${UserI}`}> <p className="review-username">{this.props.review.username}</p></Link> {rating}
                        </div>
                        <div className="review-item-actions">
                            {this.trash()}
                            {this.edit()}
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