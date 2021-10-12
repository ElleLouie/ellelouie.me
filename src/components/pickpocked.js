import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  '/src/img/picked/1.png',
  '/src/img/picked/2.png',
  '/src/img/picked/3.png',
  '/src/img/picked/4.png',
  '/src/img/picked/5.png',
  '/src/img/picked/6.png',
  '/src/img/picked/7.png',
  '/src/img/picked/8.png',
  '/src/img/picked/9.png',
  '/src/img/picked/10.png',
  '/src/img/picked/11.png',
  '/src/img/picked/12.png',
  '/src/img/picked/13.png',
  '/src/img/picked/14.png',
  '/src/img/picked/15.png',
  '/src/img/picked/16.png',
  '/src/img/picked/17.png',
  '/src/img/picked/18.png',
  '/src/img/picked/19.png',
];

function Pickpocked(props) {
  return (
    <div className="Picked">
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
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[5]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[6]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[7]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[8]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[9]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[10]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[11]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[12]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[13]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[14]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[15]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[16]})` }} />
        </div>

        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[17]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[18]})` }} />
        </div>
        <div className="each-slide">
          <div style={{ backgroundImage: `url(${slideImages[19]})` }} />
        </div>
      </Slide>
      <div className="description">
        <h1> Pickedpocked Blocked </h1>
        <h2> User Research SolidWorks Prototyping</h2>
        <p>
          This project came to fruition through a ten week course in which students were placed in teams and challenged to solve
          a real life problem by designing and creating a solution within a $500 budget. Our team choose to tackle the issue of
          pickpockets after many of our friends and family traveling abroad and in crowded cities have experienced incidents of
          items being stolen. We focused on creating an effective solution that would alert the user and could be implemented in
          any bag, while keeping in mind the importance of safety in not escalating the situation. After initial benchmark testing
          of effective sensors we began to prototype, test and use user feedback to improve our design.

          This project was an incredible opportunity to work in a team and see through an entire design and production process.
          From initial brain maps and formation of feasible ideas, to Arduino, to prototyping in SolidWorks and 3D printing, our
          team learned the value of adjusting and pivoting when plans do not initially work out.
        </p>
      </div>
    </div>
  );
}

export default Pickpocked;
