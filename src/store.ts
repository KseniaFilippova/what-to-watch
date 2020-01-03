import { createStore } from 'redux';

import reducer from './reducers/data-reducer/data-reducer';

const store = createStore(reducer);

export default store;
