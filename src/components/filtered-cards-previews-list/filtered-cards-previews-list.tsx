import React from 'react';
import { connect } from 'react-redux';

import CardsPreviewsList from '../cards-previews-list/cards-previews-list';

import Movie from '../../models/movie';
import { Store } from '../../store/store';

import { getMoviesByGenre } from '../../reducers/movies-reducer/selectors';

interface Props {
  activeGenre: string;
  movies: Movie[];
}

const FilteredCardsPreviewsList = (props: Props) => {
  const { movies } = props;

  return <CardsPreviewsList movies={movies} />;
};

const mapStateToProps = (state: Store, ownProps: { activeGenre: string }) => {
  const { activeGenre } = ownProps;
  return {
    movies: getMoviesByGenre(state, activeGenre),
  };
};

export default connect(mapStateToProps)(FilteredCardsPreviewsList);
