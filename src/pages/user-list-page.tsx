import React from 'react';

import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import CardsPreviews from '../components/cards-previews/cards-previews';

const UserListPage = () => {
  return (
    <div className='user-page'>
      <AppHeader isUserListPage isSignedIn={false} />
      <CardsPreviews page='user-list' />
      <AppFooter />
    </div>
  );
};

export default UserListPage;
