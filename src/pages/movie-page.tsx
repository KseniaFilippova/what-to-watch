import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';
import FullCard from '../components/full-card/full-card';

import Movie from '../models/movie';
import { State } from '../reducers/data-reducer/data-reducer';
import { getMovieById } from '../reducers/data-reducer/selectors';

interface Props {
  id: string;
  movie: Movie;
}

const MoviePage = (props: Props) => {
  const { movie } = props;

  if (!movie) {
    return null;
  }

  return (
    <Fragment>
      <FullCard movie={movie} />
      <div className='page-content'>
        <section className='catalog catalog--like-this'>
          <h2 className='catalog__title'>More like this</h2>

          <CardsPreviewsList isFilteredByRelated={true} relatedMovie={movie} />
        </section>
        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: State, ownProps: { id: string }) => {
  return {
    movie: getMovieById(state, parseInt(ownProps.id)),
  };
};

export default connect(mapStateToProps)(MoviePage);
