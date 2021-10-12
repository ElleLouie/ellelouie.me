import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';

import img1 from '../img/picked/_1.png';
import img2 from '../img/picked/_2.png';
import img3 from '../img/picked/_3.png';
import img4 from '../img/picked/_4.png';
import img5 from '../img/picked/_5.png';
import img6 from '../img/picked/_6.png';
import img7 from '../img/picked/_7.png';
import img8 from '../img/picked/_8.png';
import img9 from '../img/picked/_9.png';
import img10 from '../img/picked/_10.png';
import img11 from '../img/picked/_11.png';
import img12 from '../img/picked/_12.png';
import img13 from '../img/picked/_13.png';
import img14 from '../img/picked/_14.png';
import img15 from '../img/picked/_15.png';
import img16 from '../img/picked/_16.png';
import img17 from '../img/picked/_17.png';
import img18 from '../img/picked/_18.png';
import img19 from '../img/picked/_19.png';

const slideImages = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16,
  img17, img18, img19,
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
