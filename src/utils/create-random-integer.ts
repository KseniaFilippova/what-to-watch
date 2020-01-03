const createRandomInteger = (minNumber: number, maxNumber: number): number => {
  return Math.floor(minNumber + Math.random() * (maxNumber + 1 - minNumber));
};

export default createRandomInteger;
