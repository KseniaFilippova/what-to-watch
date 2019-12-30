import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  isUserListPage?: boolean;
  isSignInPage?: boolean;
  isSignedIn: boolean;
}

const AppHeader = (props: Props) => {
  const { isUserListPage, isSignInPage, isSignedIn } = props;

  const userAvatar = (
    <div className='user-block__avatar'>
      <img src='img/avatar.jpg' alt='User avatar' width='63' height='63' />
    </div>
  );

  const signInLink = (
    <a href='sign-in.html' className='user-block__link'>
      Sign in
    </a>
  );

  const isUserPage = isUserListPage || isSignInPage;

  const headerClassname = isUserPage
    ? 'page-header user-page__head'
    : 'page-header movie-card__head';

  return (
    <header className={headerClassname}>
      <div className='logo'>
        <Link to='/' className='logo__link'>
          <span className='logo__letter logo__letter--1'>W</span>
          <span className='logo__letter logo__letter--2'>T</span>
          <span className='logo__letter logo__letter--3'>W</span>
        </Link>
      </div>

      {isUserPage && (
        <h1 className='page-title user-page__title'>
          {isUserListPage ? 'My list' : 'Sign in'}
        </h1>
      )}

      {!isSignInPage && (
        <div className='user-block'>{isSignedIn ? userAvatar : signInLink}</div>
      )}
    </header>
  );
};

export default AppHeader;
