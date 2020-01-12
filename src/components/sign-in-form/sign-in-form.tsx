import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { WebAPIContext } from '../../context/web-api-context';

import { updateUser } from '../../actions/user-actions';

import User from '../../models/user';
import { saveUserState } from '../../store/local-storage';

interface Props {
  updateUser: (user: User) => void;
}

const SignInForm = (props: Props) => {
  const { updateUser } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNotRecognised, setIsNotRecognized] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const webApi = useContext(WebAPIContext);

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData: { email: string; password: string } = {
      email,
      password,
    };

    webApi
      .authorize(formData)
      .then(
        (res: {
          avatar_url: string;
          email: string;
          id: number;
          name: string;
        }) => {
          const user: User = {
            avatar: res.avatar_url,
            email: res.email,
            id: res.id,
            name: res.name,
          };
          updateUser(user);
          saveUserState(user);

          if (location.key) {
            history.goBack();
          } else {
            history.push('/');
          }
        },
      )
      .catch(() => setIsNotRecognized(true));
  };

  return (
    <div className='sign-in user-page__content'>
      <form className='sign-in__form' onSubmit={onFormSubmit}>
        {isNotRecognised && (
          <div className='sign-in__message'>
            <p>
              We can’t recognize this email <br /> and password combination.
              Please try again.
            </p>
          </div>
        )}

        <div className='sign-in__fields'>
          <div className='sign-in__field'>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className='sign-in__input'
              type='email'
              placeholder='Email address'
              name='user-email'
              id='user-email'
            />
            <label
              className='sign-in__label visually-hidden'
              htmlFor='user-email'
            >
              Email address
            </label>
          </div>
          <div className='sign-in__field'>
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className='sign-in__input'
              type='password'
              placeholder='Password'
              name='user-password'
              id='user-password'
            />
            <label
              className='sign-in__label visually-hidden'
              htmlFor='user-password'
            >
              Password
            </label>
          </div>
        </div>
        <div className='sign-in__submit'>
          <button className='sign-in__btn' type='submit'>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = {
  updateUser,
};

export default connect(null, mapDispatchToProps)(SignInForm);
