import moment from 'moment';

const formatDate = (date: Date, format: string): string => {
  return moment(date).format(format);
};

export default formatDate;
