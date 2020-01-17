import React from 'react';
import { connect } from 'react-redux';

import AppFooter from '../components/app-footer/app-footer';

import { getMovieById } from '../reducers/movies-reducer/selectors';

import Movie from '../models/movie';
import { Store } from '../store/store';

interface Props {
  movie: Movie;
}

const PlayerPage = (props: Props) => {
  const { movie } = props;

  const onBackButtonClick = () => {
    history.back();
  };

  if (!movie) {
    return null;
  }

  return (
    <div className='user-page'>
      <section className='catalog'>
        <div className='player__header'>
          <button
            type='button'
            className='player__exit'
            onClick={onBackButtonClick}
          >
            Back
          </button>
        </div>
        <video
          src={movie.videoLink}
          className='player__video'
          poster={movie.previewImage}
          autoPlay
          controls
        ></video>
      </section>
      <AppFooter />
    </div>
  );
};

const mapStateToProps = (state: Store, ownProps: { id: string }) => {
  const movie = getMovieById(state, parseInt(ownProps.id));
  return {
    movie,
  };
};

export default connect(mapStateToProps)(PlayerPage);
