import React from 'react';

function ReviewsIndexItem({review, movie}) {
 
    return (
        <div>
            <div>
                {review.text}
            </div>
            <div>
                {review.date}
            </div>
            {/* {review.rating.$numberDecimal} */}
        </div>
    )
}


export default ReviewsIndexItem