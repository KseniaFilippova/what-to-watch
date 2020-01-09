import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';

import { favoriteMoviesLoaded } from '../actions/data-actions';

import { MoviesApiContext } from '../context/movies-api-context';

import Movie from '../models/movie';
import MovieFromServer from '../models/movie-from-server';
import { Store } from '../store/store';

import { getFavoriteMovies } from '../reducers/data-reducer/selectors';

interface Props {
  favoriteMovies: Movie[];
  favoriteMoviesLoaded: (
    favoriteMovies: MovieFromServer[],
  ) => {
    type: 'FAVORITE_MOVIES_LOADED';
    payload: Movie[];
  };
}

const UserListPage = (props: Props) => {
  const { favoriteMovies, favoriteMoviesLoaded } = props;

  const moviesApi = useContext(MoviesApiContext);

  useEffect(() => {
    moviesApi.getFavoriteMovies().then((movies: MovieFromServer[]) => {
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
