import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'


class ProfileMoviesAllIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'ProfileMoviesAllIndexItem'} data-tip data-for={this.props.movie.title}>
        <ReactTooltip id={this.props.movie.title} place="top" effect="solid" type="dark" className='movie-tooltip'>
          <span>{this.props.movie.title}</span>
        </ReactTooltip>
        
        
        <Link to={`/movies/${this.props.movie._id}`} className="index-thumbnail-link">
          <div className="profile-movies-all-item-container">
            <div className="profile-movies-all-thumbnail-container">
              <img
                src={this.props.movie.poster_url}
                alt=""
                className="index-thumbnail"
              />
            </div>
          </div>
        </Link>
      </div>)
  }

}


export default ProfileMoviesAllIndexItem;