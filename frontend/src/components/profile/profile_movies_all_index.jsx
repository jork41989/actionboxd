
import React from 'react';
import ProfileMoviesAllIndexItem from './profile_movies_all_index_item'

class ProfileMoviesAllIndex extends React.Component {
  constructor(props) {
    super(props);
    this.hasMoviesAll = this.hasMoviesAll.bind(this)
  }

  hasMoviesAll() {
    if (this.props.movies) {
      return (
        this.props.movies.map(movie => (
          <ProfileMoviesAllIndexItem movie={movie} key={movie.id} />
        ))
      )
    } else {
      return (
        <div>Nothing to see here!</div>
      )
    }

  }

  render() {
    console.log('hello')
    return (
      <div className={'ProfileMoviesAllIndex'}>
        {this.hasMoviesAll()}
      </div>)
  }
}


export default ProfileMoviesAllIndex;