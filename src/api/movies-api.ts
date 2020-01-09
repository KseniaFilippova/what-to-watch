import Api from './api';

export default class MoviesApi extends Api {
  constructor() {
    super();
  }

  public async getMovies() {
    return this.makeRequest('/films');
  }

  public getReviews(movieId: number) {
    return this.makeRequest(`/comments/${movieId}`);
  }

  public getFavoriteMovies() {
    return this.makeRequest('/favorite');
  }

  public setFavouriteStatus(movieId: number, status: 0 | 1) {
    return this.makeRequest(`/favorite/${movieId}/${status}`, 'post');
  }
}
