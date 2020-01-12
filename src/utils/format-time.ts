const setLeadZero = (number: number): string => {
  return number >= 10 ? `${number}` : `0${number}`;
};

const formatTime = (time: number = 0): string => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time - hours * 3600) / 60);
  const seconds = Math.floor(time - hours * 3600 - minutes * 60);

  return `${setLeadZero(hours)}:${setLeadZero(minutes)}:${setLeadZero(
    seconds,
  )}`;
};

export default formatTime;
