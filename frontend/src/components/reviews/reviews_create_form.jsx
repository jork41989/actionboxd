import React from 'react'
import './reviews_form.css'

class ReviewsCreateForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            text: "",
            rating: "",
            username: this.props.currentUser.username
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.confirmExit = this.confirmExit.bind(this);
    }

    updateRating(num){
        return e => {
            this.setState({ rating: num })
        };
    }

    updateText() {
        return e => {
            this.setState({ text: e.currentTarget.value })
        };
    }

    handleSubmit(e){
        e.preventDefault();
        let review = Object.assign({}, this.state);
        this.props.writeReview(review, this.props.movie._id, this.props.currentUser.id);
        this.props.closeModal();
    }

    confirmExit(e) {
        e.preventDefault();
        let result = window.confirm("Are you sure you want to exit?");
        if (result) {
            this.props.closeModal();
        }
    }

    render() {
        let posterAlt = `${this.props.movie.title} poster`;
        let errorsList = (this.props.errors) ? (
            this.props.errors.map((error, index) => (
                <li className="errors" key={index}>{error}</li>
            ))) : (
                <div></div>
            );

        let ratingSelect;
        
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
                    {errorsList}
                    <p className="review-intro">I WATCHED...</p>
                    <p className="review-header">{this.props.movie.title}</p><p className="review-movie-year">{this.props.movie.year}</p>
                    <form className="reviews-create-form" onSubmit={this.handleSubmit}>

                        <textarea  
                            onChange={this.updateText()} 
                            value={this.state.text} 
                            placeholder="Add a review..." 
                        />
                        
                        <div className="review-stars">

                            <div className={'review-stars-1'} onClick={this.updateRating("1.0")}></div>
                            <div className={'review-stars-2'} onClick={this.updateRating("2.0")}></div>
                            <div className={'review-stars-3'} onClick={this.updateRating("3.0")}></div>
                            <div className={'review-stars-4'} onClick={this.updateRating("4.0")}></div>
                            <div className={'review-stars-5'} onClick={this.updateRating("5.0")}></div>
                            <div className={`review-stars-color ${ratingSelect}`}></div>

                            
                            
                            
                        </div>

                        <div className="submit-row">
                            <button className="reviews-submit">Save</button>
                        </div>
                    </form>   

                </div>
                <div
                    className="review-close-button"
                    onClick={this.confirmExit}
                >X</div> 
            </div>
        )
    }
}

export default ReviewsCreateForm;
