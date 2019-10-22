import React from 'react';
import MoviesIndexItem from './movies_index_item';

class MoviesIndex extends React.Component{
    componentDidMount(){
        this.props.getMovies();
    }

    render(){
        let moviesList = this.props.movies.map(movie => 
                <MoviesIndexItem key={movie.id} movie={movie} />
            );

        if (moviesList.length === 0){
            return <div className="movies-index-container">
                Loading...
            </div>
        }

        return(
            <div className="movies-index-container">
                <div>
                    Movies
                </div>
                <ul className="movies-list">
                    {moviesList}
                </ul>
            </div>
        );
    }
}

export default MoviesIndex;