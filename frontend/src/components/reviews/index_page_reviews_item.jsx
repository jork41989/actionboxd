import React from 'react';
import { Link } from 'react-router-dom';

function IndexPageReviewsItem({review}){
    return(
        <div>{review.text}</div>
    )
}

export default IndexPageReviewsItem