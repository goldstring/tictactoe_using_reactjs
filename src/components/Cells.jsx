import React from 'react';
import Cross from '../assets/cross.png';
import Circle from '../assets/circle.png';

function Cells({ index, handleClick, value }) {
  return (
    <>
      <div
        data-key={index}
        className="cell"
        onClick={(e) => handleClick(e, index)}
      >
        {value === null ? (
          ''
        ) : value ? (
          <img src={Cross} alt="Cross Image" />
        ) : (
          <img src={Circle} alt="Cirle Image" />
        )}
      </div>
    </>
  );
}

export default Cells;
