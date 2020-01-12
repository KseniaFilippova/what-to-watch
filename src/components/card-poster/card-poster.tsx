import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  src: string;
  name: string;
  isBig?: boolean;
  link?: string;
}

const CardPoster = (props: Props) => {
  const { src, name, isBig, link } = props;
  const posterClassName = isBig
    ? 'movie-card__poster movie-card__poster--big'
    : 'movie-card__poster';

  const poster = (
    <div className={posterClassName}>
      <img src={src} alt={`${name} poster`} width='218' height='327' />
    </div>
  );

  return link ? <Link to={link}>{poster}</Link> : poster;
};

export default CardPoster;
