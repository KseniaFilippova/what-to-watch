import React, { Fragment } from 'react';

import AppFooter from '../components/app-footer/app-footer';
import MovieCard from '../components/card/card';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';

const MainPage = () => {
  return (
    <Fragment>
      <MovieCard />
      <div className='page-content'>
        <CardsPreviewsList isMoreButton page='main' />
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default MainPage;
