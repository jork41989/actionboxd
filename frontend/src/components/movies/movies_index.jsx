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
            <ul className="movies-list">
                {moviesList}
            </ul>
        );
    }
}

export default MoviesIndex;