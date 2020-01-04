import React from 'react';
import MoviesApi from '../api/movies-api';

const moviesApi = new MoviesApi();
const MoviesApiContext = React.createContext(moviesApi);

export { moviesApi, MoviesApiContext };
