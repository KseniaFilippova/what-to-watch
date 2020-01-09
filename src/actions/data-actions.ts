import Movie from '../models/movie';
import MovieFromServer from '../models/movie-from-server';

import store from '../store/store';

const moviesLoaded = (movies: MovieFromServer[]) => {
  const payload: Movie[] = movies.map((movie: MovieFromServer) => ({
    backgroundColor: movie.background_color,
    backgroundImage: movie.background_image,
    description: movie.description,
    director: movie.director,
    genre: movie.genre,
    id: movie.id,
    isFavorite: movie.is_favorite,
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    previewVideoLink: movie.preview_video_link,
    rating: movie.rating,
    released: movie.released,
    runTime: movie.run_time,
    scoresCount: movie.scores_count,
    starring: movie.starring,
    videoLink: movie.video_link,
  }));

  return {
    type: 'MOVIES_LOADED',
    payload,
  };
};

const updateMovies = (movie: MovieFromServer) => {
  const updatedMovie = {
    backgroundColor: movie.background_color,
    backgroundImage: movie.background_image,
    description: movie.description,
    director: movie.director,
    genre: movie.genre,
    id: movie.id,
    isFavorite: movie.is_favorite,
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    previewVideoLink: movie.preview_video_link,
    rating: movie.rating,
    released: movie.released,
    runTime: movie.run_time,
    scoresCount: movie.scores_count,
    starring: movie.starring,
    videoLink: movie.video_link,
  };
  const movies = store.getState().data.movies;

  const index = movies.findIndex((movie) => movie.id === updatedMovie.id);
  const updatedMovies = [...movies];
  updatedMovies.splice(index, 1, updatedMovie);

  return {
    type: 'UPDATE_MOVIES',
    payload: updatedMovies,
  };
};

const favoriteMoviesLoaded = (movies: MovieFromServer[]) => {
  const payload: Movie[] = movies.map((movie: MovieFromServer) => ({
    backgroundColor: movie.background_color,
    backgroundImage: movie.background_image,
    description: movie.description,
    director: movie.director,
    genre: movie.genre,
    id: movie.id,
    isFavorite: movie.is_favorite,
    name: movie.name,
    posterImage: movie.poster_image,
    previewImage: movie.preview_image,
    previewVideoLink: movie.preview_video_link,
    rating: movie.rating,
    released: movie.released,
    runTime: movie.run_time,
    scoresCount: movie.scores_count,
    starring: movie.starring,
    videoLink: movie.video_link,
  }));

  return {
    type: 'FAVORITE_MOVIES_LOADED',
    payload,
  };
};

export { moviesLoaded, updateMovies, favoriteMoviesLoaded };
