import React, { Fragment } from 'react';

import AppFooter from '../components/app-footer/app-footer';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';
import FullCard from '../components/full-card/full-card';

const MoviePage = () => {
  return (
    <Fragment>
      <FullCard />
      <div className='page-content'>
        <CardsPreviewsList page='movie' />
        <AppFooter />
      </div>
    </Fragment>
  );
};

export default MoviePage;
