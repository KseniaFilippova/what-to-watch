import { createStore } from 'redux';
import { loadUserState } from './session';

import reducer from '../reducers/index';

import Movie from '../models/movie';
import User from '../models/user';

const preloadedUser = loadUserState();

interface Store {
  data: {
    movies: Movie[];
    favoriteMovies: Movie[];
    promoMovie: Movie;
  };
  user: { user: User };
}

const initialState: Store = {
  data: { movies: [], favoriteMovies: [], promoMovie: null },
  user: { user: preloadedUser },
};

const store = createStore(reducer, initialState);

export default store;
export { Store };
