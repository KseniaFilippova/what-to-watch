interface State {
  movies: any[];
}

interface Action {
  type: string;
  payload?: any;
}

const initialState: State = {
  movies: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'MOVIES_LOADED':
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
