import React from 'react';

import Preview from '../card-preview/card-preview';
import TabsList from '../tabs-list/tabs-list';

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

interface Props {
  page: 'main' | 'movie' | 'user-list';
  isMoreButton?: boolean;
}

const CardsPreviewsList = (props: Props) => {
  const { page, isMoreButton } = props;

  const sectionClassname =
    page === 'movie' ? 'catalog catalog--like-this' : 'catalog';

  return (
    <section className={sectionClassname}>
      {page === 'main' && <TabsList items={GENRES} type='genres' />}

      {page === 'movie' && <h2 className='catalog__title'>More like this</h2>}

      <div className='catalog__movies-list'>
        <Preview src='img/bohemian-rhapsody.jpg' name='Bohemian Rhapsody' />
        <Preview src='img/macbeth.jpg' name='Macbeth' />
        <Preview src='img/aviator.jpg' name='Aviator' />
        <Preview
          src='img/we-need-to-talk-about-kevin.jpg'
          name='We need to talk about Kevin'
        />
      </div>

      {isMoreButton && (
        <div className='catalog__more'>
          <button className='catalog__button' type='button'>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

export default CardsPreviewsList;
