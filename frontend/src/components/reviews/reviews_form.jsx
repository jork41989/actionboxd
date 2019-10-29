import React from 'react'
import './reviews_form.css'
import ReactTooltip from 'react-tooltip'

class ReviewsForm extends React.Component {
    constructor(props){
        super(props)
        let newReviewProps = Object.assign({}, this.props.review, {username: this.props.currentUser.username, errors: {}})
        this.state = newReviewProps;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
        this.errorCheck = this.errorCheck.bind(this);
    }

    errorCheck() {
        if (Object.keys(this.props.errors).length === 0) {
            this.props.closeModal()
        }
        this.setState({ errors: this.props.errors })
    }  

    updateRating(num) {
        return e => {
            if (this.props.review.rating.$numberDecimal){
                this.props.review.rating.$numberDecimal = num;
            }
            this.setState({ rating: num });
        };
    }

    updateText() {
        return e => {
            this.setState({ text: e.currentTarget.value })
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        let review = {
            text: this.state.text,
            rating: this.state.rating,
            username: this.state.username
        }
        if (this.props.action === 'create'){
            debugger;
            this.props.writeReview(review, this.props.movie._id, this.props.currentUser.id)
                .then(this.errorCheck);
        } else {
            review = Object.assign({}, {["_id"]: this.state._id}, review);
            if(review.rating.$numberDecimal){
                review.rating = review.rating.$numberDecimal;
            }
            this.props.updateReview(review)
                .then(this.errorCheck);
        }
        // this.props.closeModal();
    }

    renderErrors() {

        if (Object.keys(this.state.errors).includes('text')) {
            let textField = document.getElementById('text')
            textField.style.border = '3px solid red'
        }
        if (Object.keys(this.state.errors).includes('rating')) {
            let ratingField = document.getElementById('rating-input')
            ratingField.style.border = '3px solid red'
        }

        return (
            <div>
                {Object.keys(this.state.errors).map((error, i) => (
                    <div id={i}>
                        <ReactTooltip id={error} place="top" type="error" effect="solid">
                            <span>{this.state.errors[error]}</span>
                        </ReactTooltip>
                    </div>
                ))}
            </div>
        );
    }



    render() {
        let posterAlt = `${this.props.movie.title} poster`;
        let ratingSelect;

        if (this.props.review.rating.$numberDecimal){
            switch (this.props.review.rating.$numberDecimal) {
                case "1.0":
                    ratingSelect = "one";
                    break;
                case "2.0":
                    ratingSelect = "two";
                    break;
                case "3.0":
                    ratingSelect = "three";
                    break;
                case "4.0":
                    ratingSelect = "four";
                    break;
                case "5.0":
                    ratingSelect = "five";
                    break;
                default:
                    ratingSelect = "";
            }
        } else {
            switch(this.state.rating){
                case "1.0":
                    ratingSelect = "one";
                    break;
                case "2.0":
                    ratingSelect = "two";
                    break;
                case "3.0":
                    ratingSelect = "three";
                    break;
                case "4.0":
                    ratingSelect = "four";
                    break;
                case "5.0":
                    ratingSelect = "five";
                    break;
                default: 
                    ratingSelect = "";
            }
        }

        return (
            <div className="reviews-form-container">
                <div className="form-thumbnail-panel">
                    <img 
                        className="review-poster"
                        src={this.props.movie.poster_url} 
                        alt={posterAlt}
                    />
                </div>

                <div className="form-review-panel">
                    <p className="review-intro">I WATCHED...</p>
                    <p className="review-header">{this.props.movie.title}</p><p className="review-movie-year">{this.props.movie.year}</p>
                    <form className="reviews-create-form" onSubmit={this.handleSubmit}>

                        <textarea  
                            id="text"
                            data-tip data-for="text"
                            onChange={this.updateText()} 
                            value={this.state.text} 
                            placeholder="Add a review..." 
                        />
                        
                        <div id="rating-input" className="review-stars" data-tip data-for="rating">

                            <div className={'review-stars-1'} onClick={this.updateRating("1.0")}></div>
                            <div className={'review-stars-2'} onClick={this.updateRating("2.0")}></div>
                            <div className={'review-stars-3'} onClick={this.updateRating("3.0")}></div>
                            <div className={'review-stars-4'} onClick={this.updateRating("4.0")}></div>
                            <div className={'review-stars-5'} onClick={this.updateRating("5.0")}></div>
                            <div className={`review-stars-color ${ratingSelect}`}></div>

                            
                            
                            
                        </div>
                        {this.renderErrors()}
                        <div className="submit-row">
                            <button className="reviews-submit">Save</button>
                        </div>
                    </form>   

                </div>
                <div
                    className="review-close-button"
                    // onClick={this.confirmExit}
                    onClick={this.props.closeModal}
                >X</div> 
            </div>
        )
    }
}

export default ReviewsForm;
