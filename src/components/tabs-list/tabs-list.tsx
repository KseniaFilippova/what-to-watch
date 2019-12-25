import React from 'react';

interface Props {
  items: string[];
  type: 'genres' | 'movie-navigation';
}

const Preview = (props: Props) => {
  const { items, type } = props;

  let listClassname: string;
  let itemClassname: string;
  let linkClassname: string;

  switch (type) {
    case 'genres':
      listClassname = 'catalog__genres-list';
      itemClassname = 'catalog__genres-item';
      linkClassname = 'catalog__genres-link';
      break;
    case 'movie-navigation':
      listClassname = 'movie-nav__list';
      itemClassname = 'movie-nav__item';
      linkClassname = 'movie-nav__link';
  }

  return (
    <ul className={listClassname}>
      {items.map((item) => {
        return (
          <li className={itemClassname} key={item}>
            <a href='#' className={linkClassname}>
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Preview;
