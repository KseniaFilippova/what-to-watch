import { createStore } from 'redux';
import { loadUserState } from './local-storage';

import reducer from '../reducers/index';

import Movie from '../models/movie';
import User from '../models/user';

const preloadedUser = loadUserState();

interface Store {
  data: {
    movies: Movie[];
    promoMovie: Movie;
  };
  user: { user: User; favoriteMovies: Movie[] };
}

const initialState: Store = {
  data: { movies: [], promoMovie: null },
  user: { user: preloadedUser, favoriteMovies: [] },
};

const store = createStore(reducer, initialState);

export default store;
export { Store };
