import React from 'react';
import ActorsMovieIndexItem from './actors_movie_index_item';
import './actors_movie_index.css';
class ActorsMovieIndex extends React.Component{

    render(){
        let actorMovieList = this.props.movies.map(movie => 
            <li className="actors-movies-grid-item">
                <ActorsMovieIndexItem 
                    movie={movie}
                    openModal={this.props.openModal}
                    watchAMovie={this.props.watchAMovie}
                    unwatchAMovie={this.props.unwatchAMovie}
                    currentUser={this.props.currentUser}
                />
            </li>)
        return(
            <ul className="actors-movies-grid">
                {actorMovieList}
            </ul>
        )
    }
}

export default ActorsMovieIndex;