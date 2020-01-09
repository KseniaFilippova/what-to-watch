import React, { useContext } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import CardPoster from '../card-poster/card-poster';

import { MoviesApiContext } from '../../context/movies-api-context';

import Movie from '../../models/movie';
import MovieFromServer from '../../models/movie-from-server';
import User from '../../models/user';
import { Store } from '../../store/store';

import { updateMovies } from '../../actions/data-actions';
import { getRandomMovie } from '../../reducers/data-reducer/selectors';
import { getUser } from '../../reducers/user-reducer/selectors';

interface Props {
  movie: Movie;
  updateMovies: (updatedMovie: MovieFromServer) => void;
  user: User;
}

const Card = (props: Props) => {
  const { movie, updateMovies, user } = props;

  if (!movie) {
    return null;
  }

  const moviesApi = useContext(MoviesApiContext);

  const onInListButtonClick = () => {
    const status = movie.isFavorite ? 0 : 1;
    moviesApi.setFavouriteStatus(movie.id, status).then((updatedMovie) => {
      updateMovies(updatedMovie);
    });
  };

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
    movie: getRandomMovie(state),
    user: getUser(state),
  };
};

const mapDispatchToProps = {
  updateMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
