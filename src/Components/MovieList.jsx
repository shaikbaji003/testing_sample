import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../Redux/MovieReducer/action';
import MovieCard from './MovieCard';
// import './MovieList.css'; // Make sure to create this CSS file for styling

const MovieList = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, isError } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading movies.</p>;

  return (
    <div data-testid="movie-list" className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
