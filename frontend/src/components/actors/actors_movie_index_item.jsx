import React from 'react';
import { Link } from 'react-router-dom';
import '../movies/movies_index.css';

class ActorsMovieIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.watched = this.watched.bind(this)
        this.addWatch = this.addWatch.bind(this)
        this.removeWatch = this.removeWatch.bind(this)
        this.review = this.review.bind(this)
        this.actionSignIn = this.actionSignIn.bind(this)
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

                if (Object.keys(this.props.currentUser.watched_movies).includes(this.props.movie._id)) {
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
        } else if (!this.props.currentUser) {
            return (
                <div className={'actionSignIn-Index'}>
                    <p onClick={() => this.props.openModal({ modal: 'login' })} className={'actionSignIn-Index'}>Sign in</p>
                </div>
            )
        }
    }

    review() {
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

    
    render(){
        return(
            <div className="actors-movie-thumbnail-overlay">
                <Link to={`/movies/${this.props.movie._id}`}>
                    <img className="actors-movie-thumbnail" src={this.props.movie.poster_url} alt=""/>
                </Link>
                <div className="index-item-actions">
                    {this.watched()}
                    {this.review()}
                    {this.actionSignIn()}
                </div>
            </div>
        )
    }
}

export default ActorsMovieIndexItem;