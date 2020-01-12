import makeMovie from '../utils/make-movie';

import Movie from '../models/movie';
import User from '../models/user';
import WebApiMovie from '../models/web-api-movie';

const updateUser = (user: User) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

const favoriteMoviesLoaded = (movies: WebApiMovie[]) => {
  const payload: Movie[] = movies.map((movie: WebApiMovie) => makeMovie(movie));

  return {
    type: 'FAVORITE_MOVIES_LOADED',
    payload,
  };
};

export { updateUser, favoriteMoviesLoaded };
