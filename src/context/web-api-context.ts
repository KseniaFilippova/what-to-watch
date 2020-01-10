import React from 'react';
import WebAPI from '../web-api';

const webAPI = new WebAPI();
const WebAPIContext = React.createContext(webAPI);

export { webAPI, WebAPIContext };
