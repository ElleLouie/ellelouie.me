import React from 'react';

function StudioArt(props) {
  return (
    <div className="StudioArt">
      <div className="col">
        <img src="/src/img/studioart/1.jpg" alt="" />
        <img src="/src/img/studioart/1.5.jpg" alt="" />
        <img src="/src/img/studioart/4.jpg" alt="" />
        <img src="/src/img/studioart/7.jpg" alt="" />
      </div>
      <div className="col">
        <img src="/src/img/studioart/2.jpg" alt="" />
        <div className="description">
          <h1> Studio Art </h1>
          <p>
            A collection of work from Drawing and Printmaking. Students in Drawing explore the use
            of mark, line, scale, space, light and composition while drawing from observed form of
            life and human figure. Each of these courses challenged students to develop ideas and
            sketches and thoroughly work through the design process to create a final product.
          </p>
        </div>
        <img src="/src/img/studioart/3.jpg" alt="" />
        <img src="/src/img/studioart/5.jpg" alt="" />
        <img src="/src/img/studioart/8.jpg" alt="" />
      </div>
    </div>
  );
}

export default StudioArt;
