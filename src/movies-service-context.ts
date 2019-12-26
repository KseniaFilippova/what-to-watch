import React from 'react';
import MoviesService from './services/movies-service';

const moviesService = new MoviesService();
const MoviesServiceContext = React.createContext(moviesService);

export { moviesService, MoviesServiceContext };
