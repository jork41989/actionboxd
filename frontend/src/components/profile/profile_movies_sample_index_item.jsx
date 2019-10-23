import React from 'react';
import { Link } from 'react-router-dom';


class ProfileMoviesSampleIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  

  render (){
    
    return (
      <div className={'ProfileMoviesSampleIndexItem'}>
        <Link to={`/movies/${this.props.movie._id}`} className="index-thumbnail-link">
        <div className="movies-list-item-container">
          <div className="index-thumbnail-container">
            <img
              src={this.props.movie.poster_url}
              alt=""
              className="index-thumbnail"
            />
          </div>
        </div>
        </Link>
      </div>
    )
  }
}


export default ProfileMoviesSampleIndexItem;