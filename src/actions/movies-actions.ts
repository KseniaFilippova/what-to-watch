import makeMovie from '../utils/make-movie';

import Movie from '../models/movie';
import store from '../store/store';
import WebApiMovie from '../web-api/web-api-movie';

const moviesRequested = () => ({
  type: 'FETCH_MOVIES_REQUEST',
});

const moviesLoaded = (movies: WebApiMovie[]) => {
  const payload: Movie[] = movies.map((movie: WebApiMovie) => makeMovie(movie));

  return {
    type: 'FETCH_MOVIES_SUCCESS',
    payload,
  };
};

const moviesError = (error: Error) => ({
  type: 'FETCH_MOVIES_FAILURE',
  payload: error.message,
});

const updateMovie = (movie: WebApiMovie) => {
  const updatedMovie = makeMovie(movie);
  const movies = store.getState().movies.data;

  const index = movies.findIndex(
    (movie: Movie) => movie.id === updatedMovie.id,
  );
  const updatedMovies = [...movies];
  updatedMovies.splice(index, 1, updatedMovie);

  return {
    type: 'UPDATE_MOVIES_REQUEST',
    payload: updatedMovies,
  };
};

export { moviesLoaded, moviesRequested, moviesError, updateMovie };
