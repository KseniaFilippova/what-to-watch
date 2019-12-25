import React from 'react';

interface Props {
  isBig?: boolean;
}

const CardPoster = (props: Props) => {
  const { isBig } = props;
  const posterClassName = isBig
    ? 'movie-card__poster movie-card__poster--big'
    : 'movie-card__poster';

  return (
    <div className={posterClassName}>
      <img
        src='img/the-grand-budapest-hotel-poster.jpg'
        alt='The Grand Budapest Hotel poster'
        width='218'
        height='327'
      />
    </div>
  );
};

export default CardPoster;
