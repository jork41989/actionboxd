import React from 'react';
import { Link } from 'react-router-dom';
import './index_page_review_item.css'

function IndexPageReviewsItem({review}){
    let rating;


    if (review.rating) {
        switch (review.rating.$numberDecimal) {
            case "1.0":
                rating = <span className="index-green1"></span>
                break;
            case "2.0":
                rating = <span className="index-green2"></span>
                break;
            case "3.0":
                rating = <span className="index-green3"></span>
                break;
            case "4.0":
                rating = <span className="index-green4"></span>
                break;
            case "5.0":
                rating = <span className="index-green5"></span>
                break;
            default:
                rating = "";
        }
    }

    return(
        <div className="index-review-tile">
            <div className="index-review-tile-header">
                <div className="index-reviews-thumbnail-container">
                    <Link
                        className="index-review-user-link"
                        to={`/movies/${review.movie_id._id}`}>
                        <img
                            className="index-reviews-thumbnail"
                            src={review.movie_id.poster_url} alt={`${review.movie_id.title} poster`} />
                    </Link>
                </div>
                <div className="index-review-tile-header-info">
                    <Link 
                        className="index-review-user-link"
                        to={`/users/${review.user_id}`}>
                            {review.username}
                    </Link>
                    <Link
                        className="index-review-user-link"
                        to={`/movies/${review.movie_id._id}`}>
                    <h1>{review.movie_id.title}</h1>
                    </Link>
                    <p>{rating}</p>
                </div>
            </div>
            <div className="index-review-text">
                {review.text}
            </div>
        </div>
    )
}

export default IndexPageReviewsItem