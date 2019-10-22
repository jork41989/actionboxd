import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesIndexItem({movie}) {
    return (
        <li className="movies-list-item">
            <div className="index-thumbnail-container">
                <img 
                    src={movie.poster_url} 
                    alt=""
                    className="index-thumbnail"
                />
            </div>
            <Link to={`/movies/${movie._id}`} className="index-thumbnail-link">
                {movie.title}
            </Link>
        </li>
    )
}
