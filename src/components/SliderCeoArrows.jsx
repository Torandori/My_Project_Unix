import React from 'react';
import Arrow from './svgComponents/Arrow';

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <svg>
      <Arrow />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <svg>
      <Arrow />
    </svg>
  </div>
);

export { PrevArrow, NextArrow };