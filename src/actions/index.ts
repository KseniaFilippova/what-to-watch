const moviesLoaded = (movies: any[]) => {
  return {
    type: 'MOVIES_LOADED',
    payload: movies,
  };
};

export { moviesLoaded };
