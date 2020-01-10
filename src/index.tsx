import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app/app';

import { webAPI, WebAPIContext } from './context/web-api-context';

import store from './store/store';

ReactDOM.render(
  <StoreProvider store={store}>
    <WebAPIContext.Provider value={webAPI}>
      <Router>
        <App />
      </Router>
    </WebAPIContext.Provider>
  </StoreProvider>,
  document.querySelector('#root'),
);
