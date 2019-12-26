import React from 'react';

interface Props {
  items: string[];
  type: 'genres' | 'movie-navigation';
  activeTab: string;
  onTabClick?: (tabName: string) => void;
}

const Preview = (props: Props) => {
  const { items, type, activeTab, onTabClick } = props;

  let listClassname: string;
  let itemClassname: string;
  let itemWrapperClassname: string;
  let itemActiveClassname: string;

  switch (type) {
    case 'genres':
      listClassname = 'catalog__genres-list';
      itemClassname = 'catalog__genres-item';
      itemWrapperClassname = 'catalog__genres-link';
      itemActiveClassname = 'catalog__genres-item catalog__genres-item--active';
      break;
    case 'movie-navigation':
      listClassname = 'movie-nav__list';
      itemClassname = 'movie-nav__item';
      itemWrapperClassname = 'movie-nav__link';
      itemActiveClassname = 'movie-nav__item movie-nav__item--active';
  }

  return (
    <ul className={listClassname}>
      {items.map((item) => {
        const isActive = item === activeTab;
        return (
          <li
            className={isActive ? itemActiveClassname : itemClassname}
            key={item}
            onClick={() => {
              onTabClick(item);
            }}
          >
            <span className={itemWrapperClassname}>{item}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Preview;
