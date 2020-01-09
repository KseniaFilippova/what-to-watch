import React, { useContext } from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import MovieInfo from '../movie-info/movie-info';

import { MoviesApiContext } from '../../context/movies-api-context';

import { updateMovies } from '../../actions/data-actions';
import { getUser } from '../../reducers/user-reducer/selectors';

import Movie from '../../models/movie';
import MovieFromServer from '../../models/movie-from-server';
import User from '../../models/user';
import { Store } from '../../store/store';

interface Props {
  movie: Movie;
  updateMovies: (updatedMovie: MovieFromServer) => void;
  user: User;
}

const FullCard = (props: Props) => {
  const { movie, updateMovies, user } = props;

  const moviesApi = useContext(MoviesApiContext);

  const onInListButtonClick = () => {
    const status = movie.isFavorite ? 0 : 1;
    moviesApi.setFavouriteStatus(movie.id, status).then((updatedMovie) => {
      updateMovies(updatedMovie);
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
  updateMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(FullCard);
