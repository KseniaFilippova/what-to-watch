import React, { useState } from 'react';

import CardPoster from '../card-poster/card-poster';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import TabsList from '../tabs-list/tabs-list';

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

const tabToComponent = {
  Overview: <MovieOverview />,
  Details: <MovieDetails />,
  Reviews: <MovieReviews />,
};

type Tab = 'Overview' | 'Details' | 'Reviews';
type SetActiveTab = (name: string) => void;

const MovieInfo = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  return (
    <div className='movie-card__info'>
      <CardPoster isBig />

      <div className='movie-card__desc'>
        <nav className='movie-nav movie-card__nav'>
          <TabsList
            type='movie-navigation'
            items={NAV_ITEMS}
            activeTab={activeTab}
            onTabClick={setActiveTab as SetActiveTab}
          />
        </nav>
        {tabToComponent[activeTab]}
      </div>
    </div>
  );
};

export default MovieInfo;
