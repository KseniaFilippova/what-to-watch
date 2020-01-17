import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import MovieInfo from '../movie-info/movie-info';

import { WebAPIContext } from '../../context/web-api-context';

import { updateMovie } from '../../actions/movies-actions';
import { getUser } from '../../reducers/user-reducer/selectors';

import Movie from '../../models/movie';
import User from '../../models/user';
import { Store } from '../../store/store';
import WebApiMovie from '../../web-api/web-api-movie';

interface Props {
  movie: Movie;
  updateMovie: (updatedMovie: WebApiMovie) => void;
  user: User;
}

const FullCard = (props: Props) => {
  const { movie, updateMovie, user } = props;

  const history = useHistory();
  const onPlayButtonClick = () => {
    history.push(`play-movie-${movie.id}`);
  };

  const webApiClient = useContext(WebAPIContext);
  const onInListButtonClick = () => {
    const status = movie.isFavorite ? 0 : 1;
    webApiClient.setFavouriteStatus(movie.id, status).then((updatedMovie) => {
      updateMovie(updatedMovie);
    });
  };

  return (
    <section
      className='movie-card movie-card--full'
      style={{ backgroundColor: movie.backgroundColor }}
    >
      <div className='movie-card__hero'>
        <CardBackground src={movie.backgroundImage} name={movie.name} />
        <AppHeader />

        <div className='movie-card__wrap'>
          <div className='movie-card__desc'>
            <CardDescription
              name={movie.name}
              genre={movie.genre}
              year={movie.released}
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
      </div>

      <div className='movie-card__wrap movie-card__translate-top'>
        <MovieInfo movie={movie} />
      </div>
    </section>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    user: getUser(state),
  };
};

const mapDispatchToProps = {
  updateMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullCard);
