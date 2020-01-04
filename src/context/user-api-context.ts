import React from 'react';
import UserApi from '../api/user-api';

const userApi = new UserApi();
const UserApiContext = React.createContext(userApi);

export { userApi, UserApiContext };
