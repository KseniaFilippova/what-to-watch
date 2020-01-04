import React from 'react';
import { connect } from 'react-redux';

import AppHeader from '../app-header/app-header';
import CardBackground from '../card-background/card-background';
import CardButton from '../card-button/card-button';
import CardDescription from '../card-description/card-description';
import CardPoster from '../card-poster/card-poster';

import Movie from '../../models/movie';
import { Store } from '../../store';

import { getRandomMovie } from '../../reducers/data-reducer/selectors';

interface Props {
  movie: Movie;
}

const Card = (props: Props) => {
  const { movie } = props;

  const isInList = false;
  const listSvgLink = isInList ? '#in-list' : '#add';

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
              <CardButton text='My list' svgLink={listSvgLink} />
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
  };
};

export default connect(mapStateToProps)(Card);
