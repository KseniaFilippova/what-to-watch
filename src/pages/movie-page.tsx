import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';
import FullCard from '../components/full-card/full-card';

import Movie from '../models/movie';
import { Store } from '../store/store';

import {
  getMovieById,
  getRelatedMovies,
} from '../reducers/data-reducer/selectors';

interface Props {
  id: string;
  movie: Movie;
  relatedMovies: Movie[];
}

const MoviePage = (props: Props) => {
  const { movie, relatedMovies } = props;

  if (!movie) {
    return null;
  }

  return (
    <Fragment>
      <FullCard movie={movie} />
      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <CardsPreviewsList movies={relatedMovies} />
        </section>
        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: Store, ownProps: { id: string }) => {
  const movie = getMovieById(state, parseInt(ownProps.id));
  return {
    movie,
    relatedMovies: getRelatedMovies(state, movie),
  };
};

export default connect(mapStateToProps)(MoviePage);
