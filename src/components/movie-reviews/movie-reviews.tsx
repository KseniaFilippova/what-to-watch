import React, { useContext, useEffect, useState } from 'react';

import MovieReview from '../movie-review/movie-review';

import { MoviesApiContext } from '../../context/movies-api-context';

import Review from '../../models/review';

interface Props {
  id: number;
}

const MovieReviews = (props: Props) => {
  const { id } = props;
  const [reviews, setReviews] = useState<Review[]>([]);

  const moviesService = useContext(MoviesApiContext);
  useEffect(() => {
    moviesService.getReviews(id).then((reviews: Review[]) => {
      setReviews(reviews);
    });
  }, []);

  return (
    <div className='movie-card__reviews'>
      {reviews.map((review) => {
        return <MovieReview review={review} />;
      })}
    </div>
  );
};

export default MovieReviews;
