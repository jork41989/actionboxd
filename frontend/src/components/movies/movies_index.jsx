import React from 'react';
import MoviesIndexItem from './movies_index_item';
import './movies_index.css';

class MoviesIndex extends React.Component{
    constructor(props) {
        super(props);
       
    }



    componentDidMount(){
        this.props.getMovies();
    }

    render(){
        let moviesList = this.props.movies.map(movie => 
            <MoviesIndexItem key={movie._id} movie={movie} openModal={this.props.openModal} watchAMovie={this.props.watchAMovie} unwatchAMovie={this.props.unwatchAMovie} currentUser={this.props.currentUser}/>
            );

        if (moviesList.length === 0){
            return <div className="movies-index-container">
                Loading...
            </div>
        }

        return(
            <div className="movies-index-container">
                <div className="movies-index-header">
                    POPULAR ON ACTIONBOXD
                </div>
                <ul className="movies-list">
                    {moviesList}
                </ul>
            </div>
        );
    }
}

export default MoviesIndex;