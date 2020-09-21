import React from 'react';

import imgO from '../assets/o.png';
import imgX from '../assets/X.ico';

const Square = ({ value, onClick }) => {

  if (value === 'X') {
    return <img src={imgX} alt="X" style={{ width: '150px', height: '150px', alignSelf: 'center',
    justifySelf: 'center'}} />
  } 

  if (value === 'O') {
    return <img src={imgO} alt="O" style={{ width: '150px', height: '150px', alignSelf: 'center',
    justifySelf: 'center' }} />
  }

  return (
    <button
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;