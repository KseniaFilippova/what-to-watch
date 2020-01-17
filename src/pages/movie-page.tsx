import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';
import FullCard from '../components/full-card/full-card';
import NoDataIndicator from '../components/no-data-indicator/no-data-indicator';

import Movie from '../models/movie';
import { Store } from '../store/store';

import {
  getMovieById,
  getRelatedMovies,
} from '../reducers/movies-reducer/selectors';

interface Props {
  loading: boolean;
  error: string;
  id: string;
  movie: Movie;
  relatedMovies: Movie[];
}

const MoviePage = (props: Props) => {
  const { loading, error, movie, relatedMovies } = props;

  const isDataLoaded: boolean = !loading && !Boolean(error);

  return (
    <Fragment>
      {isDataLoaded && <FullCard movie={movie} />}

      <div className='page-content'>
        {isDataLoaded && (
          <section className='catalog catalog--like-this'>
            <h2 className='catalog__title'>More like this</h2>
            <CardsPreviewsList movies={relatedMovies} />
          </section>
        )}

        {loading && <NoDataIndicator type='loading' isFullPage />}
        {error && <NoDataIndicator type='error' error={error} isFullPage />}

        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: Store, ownProps: { id: string }) => {
  const movie = getMovieById(state, parseInt(ownProps.id));
  return {
    loading: state.movies.loading,
    error: state.movies.error,
    movie,
    relatedMovies: getRelatedMovies(state, movie),
  };
};

export default connect(mapStateToProps)(MoviePage);
