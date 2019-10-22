import React from 'react'

export default class movies_show extends React.Component {
    componentDidMount(){
        this.props.getMovie(this.props.match.params.movieId)
    }

    componentDidUpdate(prevProps){
        if (prevProps.match.params.movieId !== this.props.match.params.movieId){
            this.props.getMovie(this.props.match.params.movieId)
        }
    }

    render() {
        return (
            <div className="movie-show-container">
                {this.props.movie.title}
                {this.props.movie.year}
                {this.props.movie.description}
            </div>
        )
    }
}
