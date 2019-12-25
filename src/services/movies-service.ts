export default class MoviesService {
  private readonly apiBase = 'https://htmlacademy-react-2.appspot.com/wtw';

  public getMovies() {
    return this.getResource('/films');
  }

  public getReviews(movieId: number) {
    return this.getResource(`/comments/${movieId}`);
  }

  public getFavouriteMovies() {
    return this.getResource('/favorite');
  }

  public setFavouriteStatus(movieId: number, status: 0 | 1) {
    return this.postResource(`/favorite/${movieId}/${status}`);
  }

  private async getResource(url: string) {
    const res = await fetch(`${this.apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }

  private async postResource(url: string) {
    const res = await fetch(`${this.apiBase}${url}`, {
      method: 'post',
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }
}
