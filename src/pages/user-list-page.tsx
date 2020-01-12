import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';

import { favoriteMoviesLoaded } from '../actions/user-actions';

import { WebAPIContext } from '../context/web-api-context';

import Movie from '../models/movie';
import { Store } from '../store/store';
import WebApiMovie from '../web-api/web-api-movie';

import { getFavoriteMovies } from '../reducers/user-reducer/selectors';

interface Props {
  favoriteMovies: Movie[];
  favoriteMoviesLoaded: (
    favoriteMovies: WebApiMovie[],
  ) => {
    type: 'FAVORITE_MOVIES_LOADED';
    payload: Movie[];
  };
}

const UserListPage = (props: Props) => {
  const { favoriteMovies, favoriteMoviesLoaded } = props;

  const webApi = useContext(WebAPIContext);

  useEffect(() => {
    webApi.getFavoriteMovies().then((movies: WebApiMovie[]) => {
      favoriteMoviesLoaded(movies);
    });
  }, []);

  return (
    <div className='user-page'>
      <AppHeader isUserListPage />
      <section className='catalog'>
        <CardsPreviewsList movies={favoriteMovies} />
      </section>
      <AppFooter />
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    favoriteMovies: getFavoriteMovies(state),
  };
};

const mapDispatchToProps = {
  favoriteMoviesLoaded,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListPage);
