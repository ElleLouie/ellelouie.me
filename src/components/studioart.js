import React from 'react';

import sa1 from '../img/studioart/1.jpg';
import sa2 from '../img/studioart/1.5.jpg';
import sa3 from '../img/studioart/4.jpg';
import sa4 from '../img/studioart/7.jpg';
import sa5 from '../img/studioart/2.jpg';
import sa6 from '../img/studioart/3.jpg';
import sa7 from '../img/studioart/5.jpg';
import sa8 from '../img/studioart/8.jpg';

function StudioArt(props) {
  return (
    <div className="StudioArt">
      <div className="col">
        <img src={sa1} alt="" />
        <img src={sa2} alt="" />
        <img src={sa3} alt="" />
        <img src={sa4} alt="" />
      </div>
      <div className="col">
        <img src={sa5} alt="" />
        <div className="description">
          <h1> Studio Art </h1>
          <p>
            A collection of work from Drawing and Printmaking. Students in Drawing explore the use
            of mark, line, scale, space, light and composition while drawing from observed form of
            life and human figure. Each of these courses challenged students to develop ideas and
            sketches and thoroughly work through the design process to create a final product.
          </p>
        </div>
        <img src={sa6} alt="" />
        <img src={sa7} alt="" />
        <img src={sa8} alt="" />
      </div>
    </div>
  );
}

export default StudioArt;
