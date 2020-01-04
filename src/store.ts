import { createStore } from 'redux';

import reducer from './reducers/index';

import Movie from './models/movie';
import User from './models/user';

interface Store {
  data: {
    movies: Movie[];
    favoriteMovies: Movie[];
  };
  user: { user: User };
}

const store = createStore(reducer);

export default store;
export { Store };
