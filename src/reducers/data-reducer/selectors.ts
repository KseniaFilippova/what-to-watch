import { createSelector } from 'reselect';

import Movie from '../../models/movie';
import { Store } from '../../store/store';

import createRandomInteger from '../../utils/create-random-integer';

const getMovies = (state: Store): Movie[] => state.data.movies;

const getFavoriteMovies = (state: Store): Movie[] => state.data.favoriteMovies;

const getMovieById = (state: Store, id: number): Movie =>
  state.data.movies.find((movie: Movie) => movie.id === id);

const getRandomMovie = (state: Store): Movie =>
  state.data.movies[createRandomInteger(1, state.data.movies.length - 1)];

const getMoviesByGenre = (state: Store, genre: string): Movie[] =>
  genre === 'All genres'
    ? state.data.movies
    : state.data.movies.filter((movie: Movie) => movie.genre === genre);

const getRelatedMovies = (state: Store, currentMovie: Movie) =>
  state.data.movies.filter(
    (movie: Movie) =>
      movie.id !== currentMovie.id && movie.genre === currentMovie.genre,
  );

const getGenres = createSelector(getMovies, (movies) => {
  const genresSet = new Set(movies.map((movie) => movie.genre));

  const genres = [...genresSet];
  genres.sort().unshift('All genres');

  return genres;
});

export {
  getMovies,
  getFavoriteMovies,
  getMovieById,
  getRandomMovie,
  getMoviesByGenre,
  getRelatedMovies,
  getGenres,
};
