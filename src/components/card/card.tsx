import React from 'react';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import CardPoster from '../card-poster/card-poster';

import Movie from '../../models/movie';

interface Props {
  isInList?: boolean;
  movie: Movie;
}

const Card = (props: Props) => {
  const { isInList, movie } = props;

  const listSvgLink = isInList ? '#in-list' : '#add';

  return (
    <div className='movie-card'>
      <CardBackground src={movie.backgroundImage} name={movie.name} />

      <AppHeader isSignedIn={false} />

      <div className='movie-card__wrap'>
        <div className='movie-card__info'>
          <CardPoster src={movie.posterImage} name={movie.name} />

          <div className='movie-card__desc'>
            <CardDescription
              name={movie.name}
              genre={movie.genre}
              year={movie.released}
            />

            <div className='movie-card__buttons'>
              <CardButton text='Play' svgLink='#play-s' />
              <CardButton text='My list' svgLink={listSvgLink} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
