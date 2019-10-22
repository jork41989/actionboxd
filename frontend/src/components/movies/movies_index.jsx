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
            return <div>
                Loading...
            </div>
        }

        return(
            <div className="photos-index-container">
                <div>
                    HI
                </div>
                <ul className="movies-list">
                    {moviesList}
                </ul>
            </div>
        );
    }
}

export default MoviesIndex;