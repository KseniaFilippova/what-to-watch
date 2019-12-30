import React, { Fragment } from 'react';

interface Props {
  name: string;
  genre: string;
  year: number;
}

const CardDescription = (props: Props) => {
  const { name, genre, year } = props;
  return (
    <Fragment>
      <h2 className='movie-card__title'>{name}</h2>
      <p className='movie-card__meta'>
        <span className='movie-card__genre'>{genre}</span>
        <span className='movie-card__year'>{year}</span>
      </p>
    </Fragment>
  );
};

export default CardDescription;
