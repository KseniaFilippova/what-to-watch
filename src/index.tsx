import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';

import { moviesService, MoviesServiceContext } from './movies-service-context';
import store from './store';

ReactDOM.render(
  <StoreProvider store={store}>
    <MoviesServiceContext.Provider value={moviesService}>
      <Router>
        <App />
      </Router>
    </MoviesServiceContext.Provider>
  </StoreProvider>,
  document.querySelector('#root'),
);
