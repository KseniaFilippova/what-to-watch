import User from '../models/user';

const updateUser = (user: User) => {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
};

export { updateUser };
