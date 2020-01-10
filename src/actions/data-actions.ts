import Movie from '../models/movie';
import WebApiMovie from '../models/web-api-movie';

import store from '../store/store';

const makeMovie = (webApiMovie: WebApiMovie): Movie => {
  return {
    backgroundColor: webApiMovie.background_color,
    backgroundImage: webApiMovie.background_image,
    description: webApiMovie.description,
    director: webApiMovie.director,
    genre: webApiMovie.genre,
    id: webApiMovie.id,
    isFavorite: webApiMovie.is_favorite,
    name: webApiMovie.name,
    posterImage: webApiMovie.poster_image,
    previewImage: webApiMovie.preview_image,
    previewVideoLink: webApiMovie.preview_video_link,
    rating: webApiMovie.rating,
    released: webApiMovie.released,
    runTime: webApiMovie.run_time,
    scoresCount: webApiMovie.scores_count,
    starring: webApiMovie.starring,
    videoLink: webApiMovie.video_link,
  };
};

const moviesLoaded = (movies: WebApiMovie[]) => {
  const payload: Movie[] = movies.map((movie: WebApiMovie) => makeMovie(movie));

  return {
    type: 'MOVIES_LOADED',
    payload,
  };
};

const favoriteMoviesLoaded = (movies: WebApiMovie[]) => {
  const payload: Movie[] = movies.map((movie: WebApiMovie) => makeMovie(movie));

  return {
    type: 'FAVORITE_MOVIES_LOADED',
    payload,
  };
};

const promoMovieLoaded = (movie: WebApiMovie) => {
  return {
    type: 'PROMO_MOVIE_LOADED',
    payload: makeMovie(movie),
  };
};

const updateMovies = (movie: WebApiMovie) => {
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

export {
  moviesLoaded,
  favoriteMoviesLoaded,
  promoMovieLoaded,
  updateMovies,
  updatePromoMovie,
};
