import { createSelector } from 'reselect';

import Movie from '../../models/movie';
import { State } from '../../reducers/data-reducer/data-reducer';

import createRandomInteger from '../../utils/create-random-integer';

const getMovies = (state: State): Movie[] => state.movies;

const getFavoriteMovies = (state: State): Movie[] => state.favoriteMovies;

const getMovieById = (state: State, id: number): Movie =>
  state.movies.find((movie: Movie) => movie.id === id);

const getRandomMovie = (state: State): Movie =>
  state.movies[createRandomInteger(1, state.movies.length - 1)];

const getMoviesByGenre = (state: State, genre: string): Movie[] =>
  genre === 'All genres'
    ? state.movies
    : state.movies.filter((movie: Movie) => movie.genre === genre);

const getRelatedMovies = (state: State, currentMovie: Movie) =>
  state.movies.filter(
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
