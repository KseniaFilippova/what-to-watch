import React from 'react';

interface Props {
  type: 'loading' | 'error';
  error?: string;
  isFullPage?: boolean;
}

const Indicator = (props: Props) => {
  const { type, error = 'Error occured', isFullPage } = props;

  const style = {
    marginTop: 20,
    marginLeft: 20,
    height: 'auto',
  };

  if (isFullPage) {
    style.height = '100vh';
  }

  const text = type === 'loading' ? 'Loading...' : error;

  return <div style={style}>{text}</div>;
};

export default Indicator;
