import React, { Fragment } from 'react';

import formatRating from '../../utils/format-rating';
import getMovieRatingLevel from '../../utils/get-movie-rating-level';

const ACTORS_TO_SHOW_COUNT = 4;

interface Props {
  rating: number;
  scoresCount: number;
  description: string;
  director: string;
  starring: string[];
}

const MovieOverview = (props: Props) => {
  const { rating, scoresCount, description, director, starring } = props;

  const actorsToShow = starring.slice(0, ACTORS_TO_SHOW_COUNT);

  return (
    <Fragment>
      <div className='movie-rating'>
        <div className='movie-rating__score'>{formatRating(rating)}</div>
        <p className='movie-rating__meta'>
          <span className='movie-rating__level'>
            {getMovieRatingLevel(rating)}
          </span>
          <span className='movie-rating__count'>{`${scoresCount} rating${
            scoresCount === 1 ? '' : 's'
          }`}</span>
        </p>
      </div>

      <div className='movie-card__text'>
        <p>{description}</p>

        <p className='movie-card__director'>
          <strong>{`Director: ${director}`}</strong>
        </p>

        <p className='movie-card__starring'>
          <strong>{`Starring: ${actorsToShow.join(', ')} ${
            starring > actorsToShow ? 'and other' : ''
          }`}</strong>
        </p>
      </div>
    </Fragment>
  );
};

export default MovieOverview;
