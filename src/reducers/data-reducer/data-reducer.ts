import Movie from '../../models/movie';

interface Action {
  type: string;
  payload?: any;
}

interface State {
  movies: Movie[];
  promoMovie: Movie;
}

const initialState: State = {
  movies: [],
  promoMovie: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return {
        ...state,
        movies: action.payload,
      };
    case 'PROMO_MOVIE_LOADED':
      return {
        ...state,
        promoMovie: action.payload,
      };
    case 'UPDATE_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'UPDATE_PROMO_MOVIE':
      return {
        ...state,
        promoMovie: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
