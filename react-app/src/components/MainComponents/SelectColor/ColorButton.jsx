import React from 'react';

const Color = ({selected, src}) => {
  return (
    <div
      className={selected ? 'square-imgae square-imgae--selected' : 'square-imgae'}>
      <img src={src} alt="" width="" height="60" />
    </div>
  );
};

export default Color;