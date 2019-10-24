import React from 'react';

function ReviewsIndexItem({review, movie}) {
    debugger;
    return (
        <div>
            {review.text}
            {review.rating.$numberDecimal}
            {review.date}
        </div>
    )
}


export default ReviewsIndexItem