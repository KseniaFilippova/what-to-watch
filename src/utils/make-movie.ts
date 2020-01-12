import Movie from '../models/movie';
import WebApiMovie from '../models/web-api-movie';

const makeMovie = (webApiMovie: WebApiMovie): Movie => {
  return {
    backgroundColor: webApiMovie.background_color,
    backgroundImage: webApiMovie.background_image,
    description: webApiMovie.description,
    director: webApiMovie.director,
    genre: webApiMovie.genre,
    id: webApiMovie.id,
    isFavorite: webApiMovie.is_favorite,
    name: webApiMovie.name,
    posterImage: webApiMovie.poster_image,
    previewImage: webApiMovie.preview_image,
    previewVideoLink: webApiMovie.preview_video_link,
    rating: webApiMovie.rating,
    released: webApiMovie.released,
    runTime: webApiMovie.run_time,
    scoresCount: webApiMovie.scores_count,
    starring: webApiMovie.starring,
    videoLink: webApiMovie.video_link,
  };
};

export default makeMovie;
