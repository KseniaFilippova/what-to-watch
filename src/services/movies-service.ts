import axios, { AxiosError, AxiosInstance, AxiosResponse, Method } from 'axios';

import history from '../history';

export default class MoviesService {
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

  public async getMovies() {
    return this.makeRequest('/films');
  }

  public getReviews(movieId: number) {
    return this.makeRequest(`/comments/${movieId}`);
  }

  public getFavouriteMovies() {
    return this.makeRequest('/favorite');
  }

  public setFavouriteStatus(movieId: number, status: 0 | 1) {
    return this.makeRequest(`/favorite/${movieId}/${status}`, 'post');
  }

  private async makeRequest(url: string, method: Method = 'get') {
    const response = await this.api(url, { method });

    if (response && response.status === 200) {
      return response.data;
    }

    throw new Error(`Could not fetch ${url}`);
  }
}
