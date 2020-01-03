import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import CardsPreviewsList from '../cards-previews-list/cards-previews-list';
import TabsList from '../tabs-list/tabs-list';

import { State } from '../../reducers/data-reducer/data-reducer';
import { getGenres } from '../../reducers/data-reducer/selectors';

type SetActiveTab = (name: string) => void;

interface Props {
  page: 'main' | 'movie' | 'user-list';
  genres: string[];
}

const CardsPreviews = (props: Props) => {
  const { page, genres } = props;

  const [activeTab, setActiveTab] = useState('All genres');

  const sectionClassname =
    page === 'movie' ? 'catalog catalog--like-this' : 'catalog';

  return (
    <section className={sectionClassname}>
      {page === 'main' && (
        <TabsList
          items={genres}
          type='genres'
          activeTab={activeTab as string}
          onTabClick={setActiveTab as SetActiveTab}
        />
      )}

      {page === 'movie' && <h2 className='catalog__title'>More like this</h2>}

      <CardsPreviewsList genre={activeTab} />
    </section>
  );
};

const mapStateToProps = (state: State) => {
  return {
    genres: getGenres(state),
  };
};

export default connect(mapStateToProps)(CardsPreviews);
