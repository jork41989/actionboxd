import React from 'react';
import { Link } from 'react-router-dom';

class ActorsMovieIndexItem extends React.Component{
    render(){
        return(
            <div className="actors-movie-thumbnail-overlay">
            <Link to={`/movies/${this.props.movie._id}`}>
                <img className="actors-movie-thumbnail" src={this.props.movie.poster_url} alt=""/>
            </Link>
            </div>
        )
    }
}

export default ActorsMovieIndexItem;