import React from 'react';

import CardPoster from '../card-poster/card-poster';
import MovieDetails from '../movie-details/movie-details';
import TabsList from '../tabs-list/tabs-list';

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

const MovieInfo = () => {
  return (
    <div className='movie-card__info'>
      <CardPoster isBig />

      <div className='movie-card__desc'>
        <nav className='movie-nav movie-card__nav'>
          <TabsList items={NAV_ITEMS} type='movie-navigation' />
        </nav>
        <MovieDetails />
      </div>
    </div>
  );
};

export default MovieInfo;
