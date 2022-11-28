import React from 'react';

const Color = ({selected, src, id, selectColor}) => {
  return (
    <div
    onClick={() => selectColor(id)}
      className={selected ? 'square-imgae square-imgae--selected' : 'square-imgae'}>
      <img src={src} alt="" width="" height="60" />
    </div>
  );
};

export default Color;