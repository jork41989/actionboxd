import React from 'react';
import { Link } from 'react-router-dom';

export default function MoviesIndexItem({movie}) {
    return (
        <li className="movies-list-item">
            <Link to={`/movies/${movie.id}`}>
                {movie.title}
            </Link>
        </li>
    )
}
