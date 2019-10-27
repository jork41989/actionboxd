import React from 'react';
import MoviesIndexItem from './movies_index_item';
import './movies_index.css';

import IndexPageReviewsItem from '../reviews/index_page_reviews_item';

class MoviesIndex extends React.Component{
    constructor(props) {
        super(props);
       
    }



    componentDidMount(){
        this.props.getMovies();
        this.props.getMostRecentReviews();
    }

    render(){
        let moviesList = this.props.movies.map(movie => 
            <MoviesIndexItem key={movie._id} movie={movie} openModal={this.props.openModal} watchAMovie={this.props.watchAMovie} unwatchAMovie={this.props.unwatchAMovie} currentUser={this.props.currentUser}/>
            );

        if (moviesList.length === 0){
            return <div className="movies-index-container">
                Loading...
            </div>
        }

        let reviewsList = this.props.reviews.map(review => 
            <IndexPageReviewsItem key={review._id} review={review}/>);

        return(
            <div>
                <div className="movies-index-container">
                    <div className="movies-index-header">
                        POPULAR ON ACTIONBOXD
                    </div>
                    <ul className="movies-list">
                        {moviesList}
                    </ul>
                </div>
                <div className="index-reviews-section-container">
                    <div className="index-reviews-header">
                        RECENT REVIEWS
                    </div>
                    <div className="index-reviews-container">
                        {reviewsList}
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesIndex;