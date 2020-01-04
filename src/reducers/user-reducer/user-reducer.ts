import User from '../../models/user';

interface Action {
  type: string;
  payload?: any;
}

interface State {
  user: User;
}

const initialState: State = {
  user: null,
};

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'RESET_USER':
      return {
        ...state,
        user: initialState.user,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
