import React from 'react';
import { Link } from 'react-router-dom';
// import './MovieCard.css'; // Make sure to create this CSS file for styling

const MovieCard = ({ movie }) => (
  <div className="movie-card">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.Poster} alt={movie.Title} className="movie-image" />
    </Link>
    <p className="movie-name">{movie.Title}</p>
    <p className="movie-year">{movie.Year}</p>
    <p className="movie-type">{movie.Type}</p>
    <p className="movie-rating">{movie.rating}</p>
  </div>
);

export default MovieCard;
