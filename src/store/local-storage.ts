import User from '../models/user';

const loadUserState = () => {
  try {
    const serializedState = localStorage.getItem('user');

    if (!serializedState) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return null;
  }
};

const saveUserState = (user: User) => {
  try {
    const serializedState = JSON.stringify(user);
    localStorage.setItem('user', serializedState);
  } catch (error) {
    // ignore
  }
};

export { loadUserState, saveUserState };
