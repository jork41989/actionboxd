import React from 'react';
import { Link } from 'react-router-dom';


class ProfileReviewsSample extends React.Component {
  constructor(props) {
    super(props);
  }
  render (){
    console.log(this.props.review)
  return(
    <div className={'ReviewProfileDiv'}>

    </div>
  )
}
}


export default ProfileReviewsSample;