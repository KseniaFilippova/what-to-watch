import React from 'react';

import formatMovieRuntime from '../../utils/format-movie-runtime';

interface Props {
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  year: number;
}

const MovieDetails = (props: Props) => {
  const { director, starring, runTime, genre, year } = props;

  return (
    <div className='movie-card__text movie-card__row'>
      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Director</strong>
          <span className='movie-card__details-value'>{director}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Starring</strong>
          <span className='movie-card__details-value'>
            {starring.join(', ')}
          </span>
        </p>
      </div>

      <div className='movie-card__text-col'>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Run Time</strong>
          <span className='movie-card__details-value'>
            {formatMovieRuntime(runTime)}
          </span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Genre</strong>
          <span className='movie-card__details-value'>{genre}</span>
        </p>
        <p className='movie-card__details-item'>
          <strong className='movie-card__details-name'>Released</strong>
          <span className='movie-card__details-value'>{year}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
