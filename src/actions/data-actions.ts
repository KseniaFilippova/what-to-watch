import makeMovie from '../utils/make-movie';

import Movie from '../models/movie';
import WebApiMovie from '../models/web-api-movie';
import store from '../store/store';

const moviesLoaded = (movies: WebApiMovie[]) => {
  const payload: Movie[] = movies.map((movie: WebApiMovie) => makeMovie(movie));

  return {
    type: 'MOVIES_LOADED',
    payload,
  };
};

const promoMovieLoaded = (movie: WebApiMovie) => {
  return {
    type: 'PROMO_MOVIE_LOADED',
    payload: makeMovie(movie),
  };
};

const updateMovie = (movie: WebApiMovie) => {
  const updatedMovie = makeMovie(movie);
  const movies = store.getState().data.movies;

  const index = movies.findIndex(
    (movie: Movie) => movie.id === updatedMovie.id,
  );
  const updatedMovies = [...movies];
  updatedMovies.splice(index, 1, updatedMovie);

  return {
    type: 'UPDATE_MOVIES',
    payload: updatedMovies,
  };
};

const updatePromoMovie = (movie: WebApiMovie) => {
  const updatedMovie = makeMovie(movie);
  return {
    type: 'UPDATE_PROMO_MOVIE',
    payload: updatedMovie,
  };
};

export { moviesLoaded, promoMovieLoaded, updateMovie, updatePromoMovie };
