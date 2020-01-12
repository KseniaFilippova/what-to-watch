import Movie from '../../models/movie';
import User from '../../models/user';

interface Action {
  type: string;
  payload?: any;
}

interface State {
  user: User;
  favoriteMovies: Movie[];
}

const initialState: State = {
  user: null,
  favoriteMovies: [],
};

const reducer = (state = initialState, action: Action): State => {
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
