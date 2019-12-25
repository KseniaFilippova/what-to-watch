import React from 'react';

import AppFooter from '../components/app-footer/app-footer';
import AppHeader from '../components/app-header/app-header';
import SignInForm from '../components/sign-in-form/sign-in-form';

const SignInPage = () => {
  return (
    <div className='user-page'>
      <AppHeader isSignInPage isSignedIn={false} />
      <SignInForm />
      <AppFooter />
    </div>
  );
};

export default SignInPage;
