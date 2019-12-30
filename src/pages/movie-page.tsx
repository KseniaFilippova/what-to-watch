import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';
import FullCard from '../components/full-card/full-card';

import Movie from '../models/movie';
import { State } from '../reducers';

interface Props {
  id: string;
  movies: Map<number, Movie>;
}

const MoviePage = (props: Props) => {
  const { id, movies } = props;

  if (movies === null) {
    return null;
  }

  return (
    <Fragment>
      <FullCard movie={movies.get(parseInt(id))} />
      <div className='page-content'>
        <CardsPreviewsList page='movie' />
        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: State) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviePage);
