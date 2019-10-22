import React from 'react';
import MoviesIndexItem from './movies_index_item';

class MoviesIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getMovies();
    }

    render(){
        let moviesList = this.props.movies.map(movie => 
                <MoviesIndexItem key={movie.id} movie={movie} />
            );
        
        return(
            <div className="movies-list-container">
                {moviesList}
            </div>
        );
    }
}

export default MoviesIndex;