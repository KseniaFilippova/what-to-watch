import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Preview from '../card-preview/card-preview';
import TabsList from '../tabs-list/tabs-list';

import Movie from '../../models/movie';
import { State } from '../../reducers';

const GENRES = [
  'All genres',
  'Comedies',
  'Crime',
  'Documentary',
  'Dramas',
  'Horror',
  'Kids & Family',
  'Romance',
  'Sci-Fi',
  'Thrillers',
];

const COUNT_TO_SHOW = 8;

type Tab =
  | 'All genres'
  | 'Comedies'
  | 'Crime'
  | 'Documentary'
  | 'Dramas'
  | 'Horror'
  | 'Kids & Family'
  | 'Romance'
  | 'Sci-Fi'
  | 'Thrillers';
type SetActiveTab = (name: string) => void;

interface Props {
  page: 'main' | 'movie' | 'user-list';
  movies: Map<number, Movie>;
  countToShow?: number;
}

const CardsPreviewsList = (props: Props) => {
  const { page, movies } = props;

  const [unshownMovies, setUnshownMovies] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState([]);

  useEffect(() => {
    setUnshownMovies([...movies.values()]);
  }, [movies]);

  useEffect(() => {
    setMoviesToShow(unshownMovies.splice(0, COUNT_TO_SHOW));
  }, [unshownMovies]);

  const [activeTab, setActiveTab] = useState<Tab>('All genres');

  const sectionClassname =
    page === 'movie' ? 'catalog catalog--like-this' : 'catalog';

  const onShowMoreClick = (): void => {
    const addedMovies = unshownMovies.splice(0, COUNT_TO_SHOW);
    setMoviesToShow([...moviesToShow, ...addedMovies]);
  };

  return (
    <section className={sectionClassname}>
      {page === 'main' && (
        <TabsList
          items={GENRES}
          type='genres'
          activeTab={activeTab as string}
          onTabClick={setActiveTab as SetActiveTab}
        />
      )}

      {page === 'movie' && <h2 className='catalog__title'>More like this</h2>}

      <div className='catalog__movies-list'>
        {moviesToShow.map((movie) => {
          return (
            <Preview
              src={movie.previewImage}
              name={movie.name}
              id={movie.id}
              key={`movie-preview-${movie.id}`}
            />
          );
        })}
      </div>

      {Boolean(unshownMovies.length) && (
        <div className='catalog__more'>
          <button
            className='catalog__button'
            type='button'
            onClick={onShowMoreClick}
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state: State) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(CardsPreviewsList);
