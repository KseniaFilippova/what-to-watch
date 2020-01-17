import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CardPreview from '../card-preview/card-preview';
import NoDataIndicator from '../no-data-indicator/no-data-indicator';

import Movie from '../../models/movie';
import { Store } from '../../store/store';

const COUNT_TO_SHOW = 8;

interface Props {
  movies: Movie[];
  loading: boolean;
  error: string;
}

const CardsPreviewsList = (props: Props) => {
  const { movies, loading, error } = props;

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

  if (loading) {
    return <NoDataIndicator type='loading' />;
  }

  if (error) {
    return <NoDataIndicator type='error' error={error} />;
  }

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

const mapStateToProps = (state: Store) => {
  return {
    loading: state.movies.loading,
    error: state.movies.error,
  };
};

export default connect(mapStateToProps)(CardsPreviewsList);
