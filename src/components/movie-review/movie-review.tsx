import React from 'react';

import formatDate from '../../utils/format-date';
import formatRating from '../../utils/format-rating';

import Review from '../../models/review';

interface Props {
  review: Review;
}

const MovieReview = (props: Props) => {
  const { comment, user, date, rating, id } = props.review;

  return (
    <div className='review' key={`review-${id}`}>
      <blockquote className='review__quote'>
        <p className='review__text'>{comment}</p>

        <footer className='review__details'>
          <cite className='review__author'>{user.name}</cite>
          <time
            className='review__date'
            dateTime={formatDate(date, `YYYY-MM-DD`)}
          >
            {formatDate(date, `MMMM DD, YYYY`)}
          </time>
        </footer>
      </blockquote>

      <div className='review__rating'>{formatRating(rating)}</div>
    </div>
  );
};

export default MovieReview;
