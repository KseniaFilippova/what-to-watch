import React from 'react';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import MovieInfo from '../movie-info/movie-info';

const FullCard = () => {
  return (
    <section className='movie-card movie-card--full'>
      <div className='movie-card__hero'>
        <CardBackground />
        <AppHeader isSignedIn={false} />

        <div className='movie-card__wrap'>
          <div className='movie-card__desc'>
            <CardDescription />

            <div className='movie-card__buttons'>
              <CardButton text='Play' svgLink='#play-s' />
              <CardButton text='My list' svgLink='#add' />
            </div>
          </div>
        </div>
      </div>

      <div className='movie-card__wrap movie-card__translate-top'>
        <MovieInfo />
      </div>
    </section>
  );
};

export default FullCard;
