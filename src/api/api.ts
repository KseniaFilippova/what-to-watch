import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';

import history from '../history';

export default abstract class API {
  private readonly api: AxiosInstance;
  private readonly API_TIMEOUT = 5000;
  private readonly API_BASE = 'https://htmlacademy-react-2.appspot.com/wtw';

  constructor() {
    this.api = axios.create({
      baseURL: this.API_BASE,
      timeout: this.API_TIMEOUT,
      withCredentials: true,
    });

    const onSuccess = (response: AxiosResponse) => response;

    const onError = (error: AxiosError) => {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        history.push(`/login`);
      }
      return error;
    };

    this.api.interceptors.response.use(onSuccess, onError);
  }

  protected async makeRequest(url: string, method: Method = 'get', data?: any) {
    const config: { method: Method; data?: any } = { method };
    if (data) {
      config.data = data;
    }
    const response = await this.api(url, config);

    if (response && response.status === 200) {
      return response.data;
    }

    throw new Error(`Could not fetch ${url}`);
  }
}
