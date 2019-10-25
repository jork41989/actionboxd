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

//errors 

    update(field){
        return e => {
            this.setState({[field]: e.currentTarget.value})
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
        //add on change to radio buttons 
        //find how to turn into stars
        //style modal 
        let posterAlt = `${this.props.movie.title} poster`;
        let errorsList = (this.props.errors) ? (
            this.props.errors.map((error, index) => (
                <li className="errors" key={index}>{error}</li>
            ))) : (
                <div></div>
            );

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
                            onChange={this.update("text")} 
                            value={this.state.text} 
                            placeholder="Add a review..." 
                        />
                        
                        <div className="review-stars">

                            <div className={'review-stars-1'}></div>
                            <div className={'review-stars-2'}></div>
                            <div className={'review-stars-3'}></div>
                            <div className={'review-stars-4'}></div>
                            <div className={'review-stars-5'}></div>
                            <div className="review-stars-color">
                            {/* <input className="rating-slider" type="range" min="0" max="10" step="1"/>
                            <div className="rating-slider-render"></div> */}

                            {/* <label htmlFor="1">1</label>
                            <input onClick={this.update("rating")} type="radio" id="1" value="1.0" />

                            <label htmlFor="2">2</label>
                            <input onClick={this.update("rating")} type="radio" id="2" value="2.0" />

                            <label htmlFor="3">3</label>
                            <input onClick={this.update("rating")} type="radio" id="3" value="3.0" />

                            <label htmlFor="4">4</label>
                            <input onClick={this.update("rating")} type="radio" id="4" value="4.0" />

                            <label htmlFor="5">5</label>
                            <input onClick={this.update("rating")} type="radio" id="5" value="5.0" /> */}
                            
                            </div>
                            
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