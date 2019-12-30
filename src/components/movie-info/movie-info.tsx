import React, { useContext, useEffect, useState } from 'react';

import CardPoster from '../card-poster/card-poster';
import MovieDetails from '../movie-details/movie-details';
import MovieOverview from '../movie-overview/movie-overview';
import MovieReviews from '../movie-reviews/movie-reviews';
import TabsList from '../tabs-list/tabs-list';

import Movie from '../../models/movie';

const NAV_ITEMS = ['Overview', 'Details', 'Reviews'];

type Tab = 'Overview' | 'Details' | 'Reviews';
type SetActiveTab = (name: string) => void;

interface Props {
  movie: Movie;
}

const MovieInfo = (props: Props) => {
  const { movie } = props;

  const [activeTab, setActiveTab] = useState<Tab>('Overview');

  const getTabComponent = (tabName: Tab): JSX.Element => {
    switch (tabName) {
      case 'Overview':
        return (
          <MovieOverview
            rating={movie.rating}
            scoresCount={movie.scoresCount}
            description={movie.description}
            director={movie.director}
            starring={movie.starring}
          />
        );
      case 'Details':
        return (
          <MovieDetails
            director={movie.director}
            starring={movie.starring}
            runTime={movie.runTime}
            genre={movie.genre}
            year={movie.released}
          />
        );
      case 'Reviews':
        return <MovieReviews id={movie.id} />;
      default:
        return null;
    }
  };

  return (
    <div className='movie-card__info'>
      <CardPoster isBig src={movie.posterImage} name={movie.name} />

      <div className='movie-card__desc'>
        <nav className='movie-nav movie-card__nav'>
          <TabsList
            type='movie-navigation'
            items={NAV_ITEMS}
            activeTab={activeTab}
            onTabClick={setActiveTab as SetActiveTab}
          />
        </nav>
        {getTabComponent(activeTab)}
      </div>
    </div>
  );
};

export default MovieInfo;
