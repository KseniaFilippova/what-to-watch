import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';

import { moviesApi, MoviesApiContext } from './context/movies-api-context';
import { userApi, UserApiContext } from './context/user-api-context';
import store from './store/store';

ReactDOM.render(
  <StoreProvider store={store}>
    <MoviesApiContext.Provider value={moviesApi}>
      <UserApiContext.Provider value={userApi}>
        <Router>
          <App />
        </Router>
      </UserApiContext.Provider>
    </MoviesApiContext.Provider>
  </StoreProvider>,
  document.querySelector('#root'),
);
