import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import CardPoster from '../card-poster/card-poster';
import NoDataIndicator from '../no-data-indicator/no-data-indicator';

import { WebAPIContext } from '../../context/web-api-context';

import Movie from '../../models/movie';
import User from '../../models/user';
import { Store } from '../../store/store';
import WebApiMovie from '../../web-api/web-api-movie';

import { updateMovie } from '../../actions/movies-actions';
import {
  promoMovieError,
  promoMovieLoaded,
  promoMovieRequested,
  updatePromoMovie,
} from '../../actions/promo-movie-actions';
import { getPromoMovie } from '../../reducers/promo-movie-reducer/selectors';
import { getUser } from '../../reducers/user-reducer/selectors';

interface Props {
  user: User;
  movie: Movie;
  loading: boolean;
  error: null;
  promoMovieRequested: () => {
    type: 'FETCH_PROMO_MOVIE_REQUEST';
  };
  promoMovieLoaded: (
    movies: WebApiMovie,
  ) => {
    type: 'FETCH_PROMO_MOVIE_SUCCESS';
    payload: Movie;
  };
  promoMovieError: (
    error: Error,
  ) => {
    type: 'FETCH_PROMO_MOVIE_FAILURE';
    payload: string;
  };
  updateMovie: (updatedMovie: WebApiMovie) => void;
  updatePromoMovie: (updatedMovie: WebApiMovie) => void;
}

const Card = (props: Props) => {
  const {
    user,
    movie,
    loading,
    error,
    promoMovieRequested,
    promoMovieLoaded,
    promoMovieError,
    updateMovie,
    updatePromoMovie,
  } = props;

  const webApiClient = useContext(WebAPIContext);
  useEffect(() => {
    promoMovieRequested();
    webApiClient
      .getPromo()
      .then((promoMovie: WebApiMovie) => {
        promoMovieLoaded(promoMovie);
      })
      .catch((error) => {
        promoMovieError(error);
      });
  }, []);

  const history = useHistory();
  const onPlayButtonClick = () => {
    history.push(`play-movie-${movie.id}`);
  };

  const onInListButtonClick = () => {
    const status = movie.isFavorite ? 0 : 1;
    webApiClient.setFavouriteStatus(movie.id, status).then((updatedMovie) => {
      updatePromoMovie(updatedMovie);
      updateMovie(updatedMovie);
    });
  };

  const isDataLoaded: boolean = !loading && !Boolean(error);

  return (
    <div className='movie-card'>
      {isDataLoaded && (
        <CardBackground src={movie.backgroundImage} name={movie.name} />
      )}

      <AppHeader />

      <div className='movie-card__wrap'>
        {isDataLoaded && (
          <div className='movie-card__info'>
            <CardPoster
              src={movie.posterImage}
              name={movie.name}
              link={`movie-${movie.id}`}
            />

            <div className='movie-card__desc'>
              <CardDescription
                name={movie.name}
                genre={movie.genre}
                year={movie.released}
                link={`movie-${movie.id}`}
              />

              <div className='movie-card__buttons'>
                <CardButton
                  text='Play'
                  svgLink='#play-s'
                  onClick={onPlayButtonClick}
                />
                {Boolean(user) && (
                  <CardButton
                    text='My list'
                    svgLink={movie.isFavorite ? '#in-list' : '#add'}
                    onClick={onInListButtonClick}
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {loading && <NoDataIndicator type='loading' />}
        {error && <NoDataIndicator type='error' error={error} />}
      </div>
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    movie: getPromoMovie(state),
    user: getUser(state),
    loading: state.promoMovie.loading,
    error: state.promoMovie.error,
  };
};

const mapDispatchToProps = {
  promoMovieRequested,
  promoMovieLoaded,
  promoMovieError,
  updateMovie,
  updatePromoMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
