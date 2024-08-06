import { MOVIE_REQUEST, MOVIE_SUCCESS, MOVIE_FAILURE } from './actionTypes';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: MOVIE_REQUEST });

  try {
    const response = await fetch('/db.json');
    const data = await response.json();
    dispatch({ type: MOVIE_SUCCESS, payload: data.movies });
  } catch (error) {
    dispatch({ type: MOVIE_FAILURE });
  }
};
