import makeMovie from '../utils/make-movie';

import WebApiMovie from '../web-api/web-api-movie';

const promoMovieRequested = () => ({
  type: 'FETCH_PROMO_MOVIE_REQUEST',
});

const promoMovieLoaded = (movie: WebApiMovie) => {
  return {
    type: 'FETCH_PROMO_MOVIE_SUCCESS',
    payload: makeMovie(movie),
  };
};

const promoMovieError = (error: Error) => ({
  type: 'FETCH_PROMO_MOVIE_FAILURE',
  payload: error.message,
});

const updatePromoMovie = (movie: WebApiMovie) => {
  const updatedMovie = makeMovie(movie);
  return {
    type: 'UPDATE_PROMO_MOVIE_REQUEST',
    payload: updatedMovie,
  };
};

export {
  promoMovieRequested,
  promoMovieLoaded,
  promoMovieError,
  updatePromoMovie,
};
