import { createStore } from 'redux';
import { loadUserState } from './local-storage';

import reducer from '../reducers/index';

import Movie from '../models/movie';
import User from '../models/user';

const preloadedUser = loadUserState();

interface Store {
  movies: {
    data: Movie[];
    loading: boolean;
    error: string;
  };
  promoMovie: {
    data: Movie;
    loading: boolean;
    error: string;
  };
  user: { user: User; favoriteMovies: Movie[] };
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: Store = {
  movies: { data: [], loading: true, error: null },
  promoMovie: {
    data: null,
    loading: true,
    error: null,
  },
  user: { user: preloadedUser, favoriteMovies: [] },
};

const store = createStore(reducer, initialState);

export default store;
export { Store, Action };
