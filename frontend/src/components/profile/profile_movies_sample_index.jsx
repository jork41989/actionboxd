import React from 'react';
import ProfileMoviesSampleIndexItem from './profile_movies_sample_index_item';



class ProfileMoviesSampleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.hasMovies = this.hasMovies.bind(this)
  }

  hasMovies (){
    if (this.props.movies){
      return(
        this.props.movies.map(movie => (
          <ProfileMoviesSampleIndexItem movie={movie} key={movie.id}/>
        ))
      )
    } else {
      return (
        <div>Nothing to see here!</div>
      )
    }
  }

  render (){
    
    return (
      <div className={'ProfileMoviesSampleIndex'}>
      {this.hasMovies()}  
    </div>)
  }

}

export default ProfileMoviesSampleIndex;