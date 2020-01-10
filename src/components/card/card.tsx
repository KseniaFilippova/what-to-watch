import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import CardPoster from '../card-poster/card-poster';

import { WebAPIContext } from '../../context/web-api-context';

import Movie from '../../models/movie';
import User from '../../models/user';
import WebApiMovie from '../../models/web-api-movie';
import { Store } from '../../store/store';

import {
  promoMovieLoaded,
  updateMovies,
  updatePromoMovie,
} from '../../actions/data-actions';
import { getPromoMovie } from '../../reducers/data-reducer/selectors';
import { getUser } from '../../reducers/user-reducer/selectors';

interface Props {
  user: User;
  movie: Movie;
  updateMovies: (updatedMovie: WebApiMovie) => void;
  updatePromoMovie: (updatedMovie: WebApiMovie) => void;
  promoMovieLoaded: (
    promoMovie: WebApiMovie,
  ) => {
    type: 'PROMO_MOVIE_LOADED';
    payload: Movie;
  };
}

const Card = (props: Props) => {
  const {
    user,
    movie,
    updateMovies,
    updatePromoMovie,
    promoMovieLoaded,
  } = props;
  const webApi = useContext(WebAPIContext);

  useEffect(() => {
    webApi.getPromo().then((promoMovie) => {
      promoMovieLoaded(promoMovie);
    });
  }, []);

  const onInListButtonClick = () => {
    const status = movie.isFavorite ? 0 : 1;
    webApi.setFavouriteStatus(movie.id, status).then((updatedMovie) => {
      updatePromoMovie(updatedMovie);
      updateMovies(updatedMovie);
    });
  };

  if (!movie) {
    return null;
  }

  return (
    <div className='movie-card'>
      <CardBackground src={movie.backgroundImage} name={movie.name} />

      <AppHeader />

      <div className='movie-card__wrap'>
        <div className='movie-card__info'>
          <CardPoster src={movie.posterImage} name={movie.name} />

          <div className='movie-card__desc'>
            <CardDescription
              name={movie.name}
              genre={movie.genre}
              year={movie.released}
            />

            <div className='movie-card__buttons'>
              <CardButton text='Play' svgLink='#play-s' />
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
      </div>
    </div>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    movie: getPromoMovie(state),
    user: getUser(state),
  };
};

const mapDispatchToProps = {
  promoMovieLoaded,
  updateMovies,
  updatePromoMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
