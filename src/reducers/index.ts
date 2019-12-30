import Movie from '../models/movie';

interface State {
  movies: Map<number, Movie>;
  randomMovie: Movie;
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  movies: null,
  randomMovie: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SWITCH_RANDOM_MOVIE':
      return {
        ...state,
        randomMovie: action.payload,
      };
    default:
      return state;
  }
};

export { State };
export default reducer;
