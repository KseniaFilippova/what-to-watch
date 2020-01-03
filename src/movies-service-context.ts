import React from 'react';
import MoviesApi from './api/movies-api';

const moviesService = new MoviesApi();
const MoviesServiceContext = React.createContext(moviesService);

export { moviesService, MoviesServiceContext };
