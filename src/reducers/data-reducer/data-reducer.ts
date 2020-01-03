import Movie from '../../models/movie';

interface Action {
  type: string;
  payload?: any;
}

interface State {
  movies: Movie[];
  favoriteMovies: Movie[];
}

const initialState: State = {
  movies: [],
  favoriteMovies: [],
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return {
        ...state,
        movies: action.payload,
      };
    case 'FAVORITE_MOVIES_LOADED':
      return {
        ...state,
        favoriteMovies: action.payload,
      };
    case 'SET_FAVORITE_STATUS':
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};

export { State };
export default reducer;
