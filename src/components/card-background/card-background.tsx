import React from 'react';

interface Props {
  src: string;
  name: string;
}

const CardBackground = (props: Props) => {
  const { src, name } = props;

  return (
    <div className='movie-card__bg'>
      <img src={src} alt={name} />
    </div>
  );
};

export default CardBackground;
