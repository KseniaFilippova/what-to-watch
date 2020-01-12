import React from 'react';

interface Props {
  text: string;
  svgLink: string;
  onClick?: () => void;
}

const CardButton = (props: Props) => {
  const { text, svgLink, onClick } = props;

  return (
    <button className='btn movie-card__button' type='button' onClick={onClick}>
      <svg viewBox='0 0 19 19' width='19' height='19'>
        <use xlinkHref={svgLink}></use>
      </svg>
      <span>{text}</span>
    </button>
  );
};

export default CardButton;
