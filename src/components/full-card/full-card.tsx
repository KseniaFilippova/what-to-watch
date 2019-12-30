import React from 'react';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import MovieInfo from '../movie-info/movie-info';

import Movie from '../../models/movie';

interface Props {
  movie: Movie;
}

const FullCard = (props: Props) => {
  const { movie } = props;

  return (
    <section
      className='movie-card movie-card--full'
      style={{ backgroundColor: movie.backgroundColor }}
    >
      <div className='movie-card__hero'>
        <CardBackground src={movie.backgroundImage} name={movie.name} />
        <AppHeader isSignedIn={false} />

        <div className='movie-card__wrap'>
          <div className='movie-card__desc'>
            <CardDescription
              name={movie.name}
              genre={movie.genre}
              year={movie.released}
            />

            <div className='movie-card__buttons'>
              <CardButton text='Play' svgLink='#play-s' />
              <CardButton text='My list' svgLink='#add' />
            </div>
          </div>
        </div>
      </div>

      <div className='movie-card__wrap movie-card__translate-top'>
        <MovieInfo movie={movie} />
      </div>
    </section>
  );
};

export default FullCard;
