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

    componentDidUpdate(prevProps){
        if (prevProps.reviews.length > 0 && this.props.reviews.length > 0){
            if (prevProps.reviews[0]._id !== this.props.reviews[0]._id){
                this.props.getMostRecentReviews();
            }
        }
    }

    render(){
        let movieLimit = this.props.movies.slice(0, 12);
        let moviesList = movieLimit.map(movie => 
            <MoviesIndexItem key={movie._id} 
            movie={movie} 
            openModal={this.props.openModal} 
            watchAMovie={this.props.watchAMovie} 
            unwatchAMovie={this.props.unwatchAMovie} 
            currentUser={this.props.currentUser}
            />
            );
            
        if (moviesList.length === 0){
            return <div className="movies-index-container">
                <div className="loading">Loading...</div>
                <div class="lds-ellipsis">
                    <div style={{ backgroundColor: "rgb(255,128,0)" }}>
                    </div><div style={{ backgroundColor: "rgb(0,224,84)" }}>
                    </div><div style={{ backgroundColor: "rgb(64,188,244)" }}></div>
                </div>
            </div>
        }

        let firstThree = this.props.reviews.slice(0,3);
        let secondThree = this.props.reviews.slice(3, 6);
        let reviewsList1 = firstThree.map(review => 
            <IndexPageReviewsItem key={review._id} review={review}/>);
        let reviewsList2 = secondThree.map(review =>
            <IndexPageReviewsItem key={review._id} review={review} />);

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
                    <div className="index-grids-container">
                        <div className="index-reviews-container-1">
                            {reviewsList1}
                        </div>
                        <div className="index-reviews-container-2">
                            {reviewsList2}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoviesIndex;