const USER_RATING = [
  { title: `awesome`, min: 10 },
  { title: `very good`, min: 8 },
  { title: `good`, min: 5 },
  { title: `normal`, min: 3 },
  { title: `bad`, min: 0 },
];

const getMovieRatingLevel = (rating: number): string => {
  return USER_RATING.find((rank) => rating >= rank.min).title;
};

export default getMovieRatingLevel;
