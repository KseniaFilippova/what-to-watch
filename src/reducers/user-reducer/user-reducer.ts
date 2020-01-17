import { Action, Store } from '../../store/store';

const initialState: Store['user'] = {
  user: null,
  favoriteMovies: [],
};

const reducer = (state = initialState, action: Action): Store['user'] => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'FAVORITE_MOVIES_LOADED':
      return {
        ...state,
        favoriteMovies: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
