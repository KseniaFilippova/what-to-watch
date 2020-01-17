import { Action, Store } from '../../store/store';

const initialState: Store['movies'] = {
  data: null,
  loading: true,
  error: null,
};

const reducer = (state = initialState, action: Action): Store['movies'] => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
      };
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    case 'UPDATE_MOVIES_REQUEST':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
