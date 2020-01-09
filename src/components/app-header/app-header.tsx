import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import User from '../../models/user';
import { getUser } from '../../reducers/user-reducer/selectors';
import { Store } from '../../store/store';

interface Props {
  isUserListPage?: boolean;
  isSignInPage?: boolean;
  user: User;
}

const AppHeader = (props: Props) => {
  const { isUserListPage, isSignInPage, user } = props;

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
        <div className='user-block'>
          {user ? (
            <div className='user-block__avatar'>
              <Link to='/my-list'>
                <img
                  src={`https://htmlacademy-react-2.appspot.com${user.avatar}`}
                  alt='User avatar'
                  width='63'
                  height='63'
                />
              </Link>
            </div>
          ) : (
            <Link to='/sign-in' className='user-block__link'>
              Sign in
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    user: getUser(state),
  };
};

export default connect(mapStateToProps)(AppHeader);
