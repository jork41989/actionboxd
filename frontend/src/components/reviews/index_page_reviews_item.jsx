import React from 'react';
import { Link } from 'react-router-dom';
import './index_page_review_item.css'

function IndexPageReviewsItem({review}){
    return(
        <div className="index-review-tile">
            <div className="index-review-tile-header">
                <img src={review.movie_id.poster_url} alt={`${review.movie_id.title} poster`}/>
                <div className="index-review-tile-header-info">
                    {/* <Link to={`/users/`}> */}
                    <p>{review.username}</p>
                    {/* </Link> */}
                    <p>{review.movie_id.title}</p>
                    <p>{review.rating.$numberDecimal}</p>
                </div>
            </div>
            <div>
                {review.text}
            </div>
        </div>
    )
}

export default IndexPageReviewsItem