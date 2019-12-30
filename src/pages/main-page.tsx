import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import Card from '../components/card/card';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';

import Movie from '../models/movie';
import { State } from '../reducers';

interface Props {
  movies: Map<number, Movie>;
}

const MainPage = (props: Props) => {
  const { movies } = props;

  if (movies === null) {
    return null;
  }

  return (
    <Fragment>
      <Card movie={movies.get(1)} />
      <div className='page-content'>
        <CardsPreviewsList page='main' />
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

export default connect(mapStateToProps)(MainPage);
