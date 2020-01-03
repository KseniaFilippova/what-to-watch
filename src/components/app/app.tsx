import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MoviePage from '../../pages/movie-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';
import UserListPage from '../../pages/user-list-page';

import { moviesLoaded } from '../../actions/data-actions';
import { MoviesServiceContext } from '../../movies-service-context';

import Movie from '../../models/movie';
import MovieFromServer from '../../models/movie-from-server';

interface Props {
  moviesLoaded: (
    movies: MovieFromServer[],
  ) => {
    type: 'MOVIES_LOADED';
    payload: Movie[];
  };
}

const App = (props: Props) => {
  const { moviesLoaded } = props;

  const moviesService = useContext(MoviesServiceContext);
  useEffect(() => {
    moviesService.getMovies().then((movies: MovieFromServer[]) => {
      moviesLoaded(movies);
    });
  }, []);

  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route
        path='/movie-:id'
        render={({ match }) => {
          const { id } = match.params;
          return <MoviePage id={id} />;
        }}
      />
      <Route path='/player' component={PlayerPage} />
      <Route path='/sign-in' component={SignInPage} />
      <Route path='/my-list' component={UserListPage} />
    </Switch>
  );
};

const mapDispatchToProps = {
  moviesLoaded,
};

export default connect(null, mapDispatchToProps)(App);
