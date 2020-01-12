import React from 'react';
import WebApiClient from '../web-api/web-api-client';

const webAPI = new WebApiClient();
const WebAPIContext = React.createContext(webAPI);

export { webAPI, WebAPIContext };
