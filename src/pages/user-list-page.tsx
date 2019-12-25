import React from 'react';

import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import CardsPreviewsList from '../components/cards-previews-list/cards-previews-list';

const UserListPage = () => {
  return (
    <div className='user-page'>
      <AppHeader isUserListPage isSignedIn={false} />
      <CardsPreviewsList page='user-list' />
      <AppFooter />
    </div>
  );
};

export default UserListPage;
