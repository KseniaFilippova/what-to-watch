const formatRating = (rating: number): string => {
  return rating.toFixed(1).replace(`.`, `,`);
};

export default formatRating;
