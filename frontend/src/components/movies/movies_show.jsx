import React from 'react'
import './movies_show.css'

export default class MoviesShow extends React.Component {
    componentDidMount(){
        debugger;
        this.props.getMovie(this.props.match.params.movieId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.movieId !== this.props.match.params.movieId){
            this.props.getMovie(this.props.match.params.movieId)
        }
    }

    render() {
        // if (!this.props.movie) {
        //     return <div>Loading...</div>;
        // }

        return (
            <div className="movie-show-container">
                <div className="movie-show-content">

                    <div className="movie-show-poster-link-container">
                        <div className="poster-panel">
                            <div className="poster">
                                <div>poster here</div>
                                {/* {this.props.movie.posterUrl} */}
                            </div>
                            <ul className="movie-stats">
                                watched stats here
                                {/* {this.props.movie.watchedIds.length} */}
                            </ul>
                        </div>
                        thumbnail here
                    </div>
                    <div>

                    </div>
                    {/* {this.props.movie.title}
                    {this.props.movie.year}
                    {this.props.movie.description} */}
                </div>
            </div>
        )
    }
}
