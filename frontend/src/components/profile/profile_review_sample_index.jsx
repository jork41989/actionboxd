import React from 'react';
import ProfileReviewSampleContainer from './profile_review_sample_container';
import { Link } from 'react-router-dom';
class ProfileReviewSampleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.hasReviews = this.hasReviews.bind(this)
  }

  hasReviews() {
    if (this.props.reviews) {
      return (
        this.props.reviews.map(review => (
          <ProfileReviewSampleContainer review={review} key={review.id} />
        ))
      )
    } else {
      return (
        <div>Nothing to see here!</div>
      )
    }
  }

  render() {

    return (
      <div className={'ProfileReviewSampleIndex'}>
        
        {this.hasReviews()}
      </div>)
  }

}

export default ProfileReviewSampleIndex;