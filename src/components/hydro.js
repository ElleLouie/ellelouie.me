import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '/src/img/hydro/1.png',
  '/src/img/hydro/2.png',
  '/src/img/hydro/3.png',
  '/src/img/hydro/4.png',
  '/src/img/hydro/5.png',
];

function HydroPlanter(props) {
  return (
    <div className="Hydro">
      <Slide easing="ease" className="slider">
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[0]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[1]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[2]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[3]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[4]})` }} />
        </div>
      </Slide>
      <div className="description">
        <h1> Hydroplanter </h1>
        <h3> User Research Mural Prototyping</h3>
        <p className="content">
          Although a short project, I was able to carry out the entire design process of
          empathize, define, ideate, prototype and test, to develope and design a product for the home in ENGS 012: Design Thinking. After conducting user research through interviews,
          creating mind maps, developing how might we questions and POVs I found a real need. After multiple
          iterations and feedback sessions, a proof of concept and looks-like prototype of the Hydroplanter was created.
        </p>
      </div>
    </div>
  );
}

export default HydroPlanter;
