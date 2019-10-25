import React from 'react'
import './movies_show.css'
import ReviewsIndexContainer from '../reviews/reviews_index_container'

export default class MoviesShow extends React.Component {
    constructor(props) {
        super(props);
        this.watched = this.watched.bind(this)
        this.addWatch = this.addWatch.bind(this)
        this.removeWatch = this.removeWatch.bind(this)
        this.actionSignIn = this.actionSignIn.bind(this)
    }


    componentDidMount(){
        this.props.getMovie(this.props.match.params.movieId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.movieId !== this.props.match.params.movieId){
            this.props.getMovie(this.props.match.params.movieId)
        }
    }

    addWatch(){
        
        this.props.watchAMovie(this.props.currentUser.id, { userId: this.props.currentUser.id, movie_id: this.props.match.params.movieId })
    }
    removeWatch() {

        this.props.unwatchAMovie(this.props.currentUser.id, { userId: this.props.currentUser.id, movie_id: this.props.match.params.movieId })
    }
    

    watched(){
      
        if (this.props.currentUser){
        if (this.props.currentUser.watched_movies){
            if (this.props.currentUser.watched_movies.includes(this.props.match.params.movieId)){
                return (
                    <li className="actions-panel-watch-container" onClick={this.removeWatch}>
                        <div className={'watched'}></div>
                        
                        Watched
                    </li>
                )
            } else {
                return (
                    <li className="actions-panel-watch-container" onClick={this.addWatch}>
                        <div className={'not-watched'}></div>
                            Watch
                    </li>
                )
            }
        }
    }
        // 
    }
    actionSignIn(){
        if ((!this.props.currentUser) || (this.props.currentUser && Object.keys(this.props.currentUser).length === 0)){
                return (
                    <div className={'actionSignIn'}>
                        <p onClick={() => this.props.openModal({ modal: 'login' })} className={'actionSignIn'}>Sign in to log, rate or review</p>
                    </div>
                )
            }
        
    }
    render() {
        if (!this.props.movie) {
            return <div>Loading...</div>;
        }

        let posterAlt = `${this.props.movie.title} poster`;
        let coverAlt = `${this.props.movie.title} background`;
        let backgroundImageStyle = {
            display: "block",
            position: "absolute",
            width: "1200px",
            minHeight: "800px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center 72px",
            zIndex: "10",
            backgroundImage: `url(${this.props.movie.background_image_url})`
        }


        return (
            <div className="movie-show-body">

                <div className="movie-show-container">
                    <div className="background-image-container">
                        <div style={backgroundImageStyle}></div>
                        {/* <img 
                            // src={this.props.movie.background_image_url}
                            style={backgroundImageStyle}
                            alt={coverAlt}
                            className="background-image"
                        /> */}
                        <div className="fade"></div>
                    </div>

                    <div className="movie-show-content">

                        <section className="movie-show-poster-link-container">
                            <div className="poster-panel">
                                <div className="poster-container">
                                    <img 
                                        src={this.props.movie.poster_url} 
                                        alt={posterAlt}
                                        className="poster"
                                        />
                                </div>
                                <ul className="movie-stats">
                                    watched stats here
                                    {/* {this.props.movie.watchedIds.length} */}
                                </ul>
                                <div className="watch-panel">
                                    <p>WATCH</p>
                                    <div className="trailer-link-container" onClick={() => this.props.openModal({ modal: 'trailer', movieId: this.props.match.params.movieId})}>
                                        <i className="fab fa-youtube"></i>
                                        <button className="trailer-link" >Play Trailer</button>   
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="movie-show-info">
                            <div className="movie-show-info-header">
                                <h1 className="movie-show-title">
                                    {this.props.movie.title}
                                </h1>
                                <p className="movie-show-year">
                                    {this.props.movie.year}
                                </p>
                            </div>

                            <div className="movie-show-info-description">
                                {this.props.movie.description}
                            </div>

                            <ul className="actions-panel">
                                {this.watched()}
                                {this.actionSignIn()}
                                <li className="actions-panel-reviews-container">
                                    <button 
                                        className="review-button"
                                        onClick={() => this.props.openModal({ modal: 'review', movieId: this.props.match.params.movieId })}
                                    >Review</button>
                                </li>
                            </ul>

                            <div className="movie-show-info-reviews-container">
                                <h2 className="movie-show-reviews-header">
                                    REVIEWS
                                </h2>
                                <div className="movie-show-info-reviews"> 
                                    <ReviewsIndexContainer movie={this.props.movie} />
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        )
    }
}
