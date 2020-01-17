import { Action, Store } from '../../store/store';

const initialState: Store['promoMovie'] = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action: Action): Store['promoMovie'] => {
  switch (action.type) {
    case 'FETCH_PROMO_MOVIE_REQUEST':
      return {
        ...state,
        data: null,
        loading: true,
        error: null,
      };
    case 'FETCH_PROMO_MOVIE_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_PROMO_MOVIE_FAILURE':
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_PROMO_MOVIE_REQUEST':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
