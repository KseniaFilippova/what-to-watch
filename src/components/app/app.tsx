import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MoviePage from '../../pages/movie-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';
import UserListPage from '../../pages/user-list-page';

import { moviesLoaded } from '../../actions/data-actions';
import { WebAPIContext } from '../../context/web-api-context';

import Movie from '../../models/movie';
import WebApiMovie from '../../web-api/web-api-movie';

interface Props {
  moviesLoaded: (
    movies: WebApiMovie[],
  ) => {
    type: 'MOVIES_LOADED';
    payload: Movie[];
  };
}

const App = (props: Props) => {
  const { moviesLoaded } = props;

  const webApiClient = useContext(WebAPIContext);
  useEffect(() => {
    webApiClient.getMovies().then((movies: WebApiMovie[]) => {
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
  moviesLoaded,
};

export default connect(null, mapDispatchToProps)(App);
