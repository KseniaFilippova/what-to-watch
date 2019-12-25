import React from 'react';

import MovieReview from '../movie-review/movie-review';

const MovieReviews = () => {
  return (
    <div className='movie-card__reviews movie-card__row'>
      <div className='movie-card__reviews-col'>
        <MovieReview />
        <MovieReview />
        <MovieReview />
      </div>
    </div>
  );
};

export default MovieReviews;
