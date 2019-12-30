import React from 'react';

interface Props {
  isBig?: boolean;
  src: string;
  name: string;
}

const CardPoster = (props: Props) => {
  const { isBig, src, name } = props;
  const posterClassName = isBig
    ? 'movie-card__poster movie-card__poster--big'
    : 'movie-card__poster';

  return (
    <div className={posterClassName}>
      <img src={src} alt={`${name} poster`} width='218' height='327' />
    </div>
  );
};

export default CardPoster;
