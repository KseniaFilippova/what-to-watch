import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/main-page';
import MoviePage from '../../pages/movie-page';
import PlayerPage from '../../pages/player-page';
import SignInPage from '../../pages/sign-in-page';
import UserListPage from '../../pages/user-list-page';

const App = () => {
  return (
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route
        path='/:id'
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

export default App;
