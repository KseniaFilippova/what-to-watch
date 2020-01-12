import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
  genre: string;
  year: number;
  link?: string;
}

const linkStyle = {
  color: 'inherit',
  textDecoration: 'none',
};

const CardDescription = (props: Props) => {
  const { name, genre, year, link } = props;

  const description = (
    <Fragment>
      {' '}
      <h2 className='movie-card__title'>{name}</h2>
      <p className='movie-card__meta'>
        <span className='movie-card__genre'>{genre}</span>
        <span className='movie-card__year'>{year}</span>
      </p>
    </Fragment>
  );

  return link ? (
    <Link style={linkStyle} to={link}>
      {description}
    </Link>
  ) : (
    description
  );
};

export default CardDescription;
