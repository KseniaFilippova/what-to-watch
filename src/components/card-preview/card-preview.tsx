import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
  src: string;
  name: string;
  id: number;
}

const CardPreview = (props: Props) => {
  const { src, name, id } = props;
  const history = useHistory();

  const onPreviewClick = (): void => {
    history.push(`movie-${id}`);
  };

  return (
    <article
      className='small-movie-card catalog__movies-card'
      onClick={onPreviewClick}
    >
      <div className='small-movie-card__image'>
        <img src={src} alt={name} width='280' height='175' />
      </div>
      <h3 className='small-movie-card__title'>
        <a className='small-movie-card__link' href='movie-page.html'>
          {name}
        </a>
      </h3>
    </article>
  );
};

export default CardPreview;
