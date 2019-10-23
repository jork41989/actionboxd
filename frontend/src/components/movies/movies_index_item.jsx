import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesIndexItem({movie}) {
    return (
        <Link to={`/movies/${movie._id}`} className="index-thumbnail-link">
            <li className="movies-list-item">
                <div className="movies-list-item-container">
                    <div className="index-thumbnail-container">
                        <img 
                            src={movie.poster_url} 
                            alt=""
                            className="index-thumbnail"
                        />
                    </div>
                    <div className="movies-list-item-title">
                        {movie.title}
                    </div>
                </div>
            </li>
        </Link>
    )
}
