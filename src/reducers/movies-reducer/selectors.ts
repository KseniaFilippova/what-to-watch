import { createSelector } from 'reselect';

import Movie from '../../models/movie';
import { Store } from '../../store/store';

import createRandomInteger from '../../utils/create-random-integer';

const getMovies = (state: Store): Movie[] => state.movies.data;

const getMovieById = (state: Store, id: number): Movie =>
  state.movies.data.find((movie: Movie) => movie.id === id);

const getRandomMovie = (state: Store): Movie =>
  state.movies.data[createRandomInteger(1, state.movies.data.length - 1)];

const getMoviesByGenre = (state: Store, genre: string): Movie[] =>
  genre === 'All genres'
    ? state.movies.data
    : state.movies.data.filter((movie: Movie) => movie.genre === genre);

const getRelatedMovies = (state: Store, currentMovie: Movie) =>
  state.movies.data.filter(
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
  getMovieById,
  getRandomMovie,
  getMoviesByGenre,
  getRelatedMovies,
  getGenres,
};
