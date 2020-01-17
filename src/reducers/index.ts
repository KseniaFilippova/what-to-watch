import { combineReducers } from 'redux';

import moviesReducer from './movies-reducer/movies-reducer';
import promoMovieReducer from './promo-movie-reducer/promo-movie-reducer';
import userReducer from './user-reducer/user-reducer';

export default combineReducers({
  movies: moviesReducer,
  promoMovie: promoMovieReducer,
  user: userReducer,
});
