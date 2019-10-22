import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesIndexItem({movie}) {
    return (
        <li className="movies-list-item">
            <img src={movie.poster_url} alt=""/>
            <Link to={`/movies/${movie._id}`}>
                {movie.title}
            </Link>
        </li>
    )
}
