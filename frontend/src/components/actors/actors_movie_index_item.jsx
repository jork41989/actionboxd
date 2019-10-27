import React from 'react';
import { Link } from 'react-router-dom';

class ActorsMovieIndexItem extends React.Component{
    render(){
        return(
            <Link to={`/movies/${this.props.movie._id}`}>
                <img src={this.props.movie.poster_url} alt=""/>
            </Link>
        )
    }
}

export default ActorsMovieIndexItem;