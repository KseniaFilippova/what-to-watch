import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';
import Card from '../components/card/card';
import FilteredCardsPreviewsList from '../components/filtered-cards-previews-list/filtered-cards-previews-list';
import TabsList from '../components/tabs-list/tabs-list';

import { getGenres } from '../reducers/data-reducer/selectors';

import { Store } from '../store/store';

type SetActiveTab = (name: string) => void;
interface Props {
  genres: string[];
}

const MainPage = (props: Props) => {
  const { genres } = props;
  const [activeTab, setActiveTab] = useState('All genres');

  return (
    <Fragment>
      <Card />
      <div className='page-content'>
        <section className='catalog'>
          <TabsList
            items={genres}
            type='genres'
            activeTab={activeTab}
            onTabClick={setActiveTab as SetActiveTab}
          />
          <FilteredCardsPreviewsList activeGenre={activeTab} />
        </section>
        <AppFooter />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    genres: getGenres(state),
  };
};

export default connect(mapStateToProps)(MainPage);
