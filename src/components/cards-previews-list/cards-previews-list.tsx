import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CardPreview from '../card-preview/card-preview';

import Movie from '../../models/movie';
import { Store } from '../../store';

import {
  getMovies,
  getMoviesByGenre,
  getRelatedMovies,
} from '../../reducers/data-reducer/selectors';

const COUNT_TO_SHOW = 8;

interface Props {
  isFilteredByGenre?: boolean;
  genre?: string;
  isFilteredByRelated?: boolean;
  relatedMovie?: Movie;
  movies: Movie[];
}

const CardsPreviewsList = (props: Props) => {
  const { movies } = props;

  const [unshownMovies, setUnshownMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);

  useEffect(() => {
    setUnshownMovies([...movies]);
  }, [movies]);

  useEffect(() => {
    setMoviesToShow(unshownMovies.splice(0, COUNT_TO_SHOW));
  }, [unshownMovies]);

  const onShowMoreClick = (): void => {
    const addedMovies = unshownMovies.splice(0, COUNT_TO_SHOW);
    setMoviesToShow([...moviesToShow, ...addedMovies]);
  };

  return (
    <Fragment>
      <div className='catalog__movies-list'>
        {moviesToShow.map((movie) => {
          return (
            <CardPreview
              src={movie.previewImage}
              name={movie.name}
              id={movie.id}
              key={`movie-preview-${movie.id}`}
            />
          );
        })}
      </div>
      {Boolean(unshownMovies.length) && (
        <div className='catalog__more'>
          <button
            className='catalog__button'
            type='button'
            onClick={onShowMoreClick}
          >
            Show more
          </button>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = (
  state: Store,
  ownProps: {
    isFilteredByGenre?: boolean;
    genre?: string;
    isFilteredByRelated?: boolean;
    relatedMovie?: Movie;
  },
) => {
  let movies;
  if (ownProps.isFilteredByGenre) {
    movies = getMoviesByGenre(state, ownProps.genre);
  } else if (ownProps.isFilteredByRelated) {
    movies = getRelatedMovies(state, ownProps.relatedMovie);
  } else {
    movies = getMovies(state);
  }
  return {
    movies,
  };
};

export default connect(mapStateToProps)(CardsPreviewsList);
