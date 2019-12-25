import React, { Fragment } from 'react';

const CardDescription = () => {
  return (
    <Fragment>
      <h2 className='movie-card__title'>The Grand Budapest Hotel</h2>
      <p className='movie-card__meta'>
        <span className='movie-card__genre'>Drama</span>
        <span className='movie-card__year'>2014</span>
      </p>
    </Fragment>
  );
};

export default CardDescription;
