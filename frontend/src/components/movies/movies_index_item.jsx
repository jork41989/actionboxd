import React from 'react';
import { Link } from 'react-router-dom';

export default class MoviesIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.watched = this.watched.bind(this)
        this.addWatch = this.addWatch.bind(this)
        this.removeWatch = this.removeWatch.bind(this)
        this.review = this.review.bind(this)
        this.actionSignIn = this.actionSignIn.bind(this)
        this.rating = this.rating.bind(this)
        this.ratingStar = this.ratingStar.bind(this)
    }

    addWatch() {

        this.props.watchAMovie(this.props.currentUser.id, { userId: this.props.currentUser.id, movie_id: this.props.movie._id })
    }
    removeWatch() {

        this.props.unwatchAMovie(this.props.currentUser.id, { userId: this.props.currentUser.id, movie_id: this.props.movie._id })
    }


    watched() {

        if (this.props.currentUser) {
            if (this.props.currentUser.watched_movies) {
                if (this.props.currentUser.watched_movies.includes(this.props.movie._id)) {
                    return (
                        <li className="watched-index-container" onClick={this.removeWatch}>
                            <div className={'watched-index'}></div>

                            
                        </li>
                    )
                } else {
                    return (
                        <li className="watched-index-container" onClick={this.addWatch}>
                            <div className={'not-watched-index'}></div>
                           
                    </li>
                    )
                }
            }
        }
        // 
    }

    actionSignIn() {
        if (this.props.currentUser) {
            if (!this.props.currentUser.watched_movies) {
                return (
                    <div className={'actionSignIn-Index'}>
                        <p onClick={() => this.props.openModal({ modal: 'login' })} className={'actionSignIn-Index'}>Sign in</p>
                    </div>
                )
            }
        }
    }

    review(){
        if (this.props.currentUser) {
            if (this.props.currentUser.watched_movies) {
                return (
                    <li className="review-index-container" >
                        <div className={'review-index'} onClick={() => this.props.openModal({ modal: 'review', movieId: this.props.movie._id })}></div>
                </li>
                )
            }
        }
    }

    rating(){
        let sum = 0
        let count = 0
        this.props.movie.reviews.forEach(review => {
            
            if (review){
                count += 1
                sum += parseInt(review.rating.$numberDecimal)
            }
        });
        return (sum/count)
        
    }

    ratingStar(){
        let rating = 3
        if (rating > 0 && rating < 1){
            return (
                <div className={'ratingHlf'}>1/2</div>
            )
        } else if (rating >= 1 && rating < 1.5) {
            
            return (<div className={'ratingOne'}>1</div>)

        } else if (rating >= 1.5 && rating < 2){
            
            return (<div className={'ratingOneHlf'}>1.5</div>)

        } else if (rating >= 2 && rating < 2.5){
            
            return (<div className={'ratingTwo'}>2</div>)

        } else if (rating >= 2.5 && rating < 3) {
            
            return (<div className={'ratingTwoHlf'}>2.5</div>)

        } else if (rating >= 3 && rating < 3.5) {
            
            return (<div className={'ratingThree'}>3</div>)

        } else if (rating >= 3.5 && rating < 4) {
            
            return (<div className={'ratingThreeHlf'}>3.5</div>)

        } else if (rating >= 4 && rating < 4.5) {
            
            return (<div className={'ratingFour'}></div>)

        } else if (rating >= 4.5 && rating < 5) {
            
            return (<div className={'ratingFourHlf'}></div>)

        } else if (rating > 5) {
            
            return (<div className={'ratingFive'}>5</div>)

        } else {
            
            return (<div>No ratings yet</div>)
        }
    }

    render (){
        
    return (
            <div className="index-thumbnail-div" >
        <Link to={`/movies/${this.props.movie._id}`} className="index-thumbnail-link">
            <li className="movies-list-item">
                <div className="movies-list-item-container">
                    <div className="index-thumbnail-container">
                        <img 
                            src={this.props.movie.poster_url} 
                            alt=""
                            className="index-thumbnail"
                        />
                        
                    </div>
                    
                    <div className="movies-list-item-title">
                        {this.props.movie.title}
                    </div>
                </div>
            </li>
        </Link>
        <div className={'rating'}>
            {this.ratingStar()}
        </div>
            <div className="index-item-actions">
                {this.watched()}
                {this.review()}
                {this.actionSignIn()}
            </div>
        </div>
    )
    }
}
