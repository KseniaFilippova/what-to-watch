import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MoviePage from '../../pages/movie-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';
import UserListPage from '../../pages/user-list-page';

import {
  moviesError,
  moviesLoaded,
  moviesRequested,
} from '../../actions/movies-actions';
import { WebAPIContext } from '../../context/web-api-context';

import Movie from '../../models/movie';
import WebApiMovie from '../../web-api/web-api-movie';

interface Props {
  moviesRequested: () => {
    type: 'FETCH_MOVIES_REQUEST';
  };
  moviesLoaded: (
    movies: WebApiMovie[],
  ) => {
    type: 'FETCH_MOVIES_SUCCESS';
    payload: Movie[];
  };
  moviesError: (
    error: Error,
  ) => {
    type: 'FETCH_MOVIES_FAILURE';
    payload: string;
  };
}

const App = (props: Props) => {
  const { moviesRequested, moviesLoaded, moviesError } = props;

  const webApiClient = useContext(WebAPIContext);
  useEffect(() => {
    moviesRequested();
    webApiClient
      .getMovies()
      .then((movies: WebApiMovie[]) => {
        moviesLoaded(movies);
      })
      .catch((error) => {
        moviesError(error);
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
      <Route
        path='/play-movie-:id'
        render={({ match }) => {
          const { id } = match.params;
          return <PlayerPage id={id} />;
        }}
      />
      <Route path='/sign-in' component={SignInPage} />
      <Route path='/my-list' component={UserListPage} />
    </Switch>
  );
};

const mapDispatchToProps = {
  moviesRequested,
  moviesLoaded,
  moviesError,
};

export default connect(null, mapDispatchToProps)(App);
