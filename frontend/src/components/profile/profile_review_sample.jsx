import React from 'react';
import { Link } from 'react-router-dom';


class ProfileReviewsSample extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
    this.trash = this.trash.bind(this);
    this.edit = this.edit.bind(this);
  }



  confirmDelete() {
    let result = window.confirm("Delete this review permanently?")
    if (result) {
      this.props.deleteReview(this.props.review, { movie_id: this.props.review.movie_id, user_id: this.props.review.user_id })
    }
  }

  edit() {
    if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0) {
      if (this.props.currentUser.username === this.props.review.username) {
        return (
          <div
            onClick={() => this.props.openModal({ modal: 'edit-review', reviewId: this.props.review._id, movieId: this.props.review.movie_id })}
            className="edit-pen"
          >
          </div>)
      } else {
        return (<div></div>)
      }
    } else {
      return (<div></div>)
    }

  }

  trash() {
    if (this.props.currentUser && Object.keys(this.props.currentUser).length !== 0) {
      if (this.props.currentUser.username === this.props.review.username) {
        return (<i
          onClick={this.confirmDelete}
          className="far fa-trash-alt"
        ></i>)
      } else {
        return (<div></div>)
      }
    } else {
      return (<div></div>)
    }

  }


  
  render (){
    console.log(this.props.review)
    let rating;


    if (this.props.review.rating) {
      switch (this.props.review.rating.$numberDecimal) {
        case "1.0":
          rating = <span className="green1"></span>
          break;
        case "2.0":
          rating = <span className="green2"></span>
          break;
        case "3.0":
          rating = <span className="green3"></span>
          break;
        case "4.0":
          rating = <span className="green4"></span>
          break;
        case "5.0":
          rating = <span className="green5"></span>
          break;
        default:
          rating = "";
      }
    }



    
  return(
    <div className={'ReviewProfileDiv'}>
      <Link to={`/movies/${this.props.review.movie_id._id}`} className="index-thumbnail-link">
        <div className="profile-movies-all-item-container">
          <div className="profile-movies-all-thumbnail-container">
            <img
              src={this.props.review.movie_id.poster_url}
              alt=""
              className="index-thumbnail"
            />
          </div>
        </div>
      </Link>
      <div className={'reviewProfileInfoDiv'}>
        <div className={'reviewProfileInfoTitleDiv'} ><p className={'reviewProfileMovieTitle'}>{this.props.review.movie_id.title} </p> <p className={'reviewProfileMovieYear'}>{this.props.review.movie_id.year} </p></div>
        {rating}
        <div className="review-item-actions">
          {this.trash()}
          {this.edit()}
        </div>
        <div>
          <p className={'reviewProfileBody'}>{this.props.review.text} </p>
        </div>
      </div>
    </div>
  )
}
}


export default ProfileReviewsSample;