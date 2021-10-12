import React from 'react';

import s1 from '../img/snappy/snappy-ov1.png';
import s2 from '../img/snappy/snappy-ov2.png';
import s3 from '../img/snappy/snappy-dimensions1.png';
import s4 from '../img/snappy/snappy-dimensions2.png';
import s5 from '../img/snappy/snappy-materials1.png';
import s6 from '../img/snappy/snappy-materials2.png';
import s7 from '../img/snappy/snappy-materials3.png';

function Snappy(props) {
  return (
    <div className="Snappy">
      <div className="row">
        <img src={s1} alt="" />
        <img src={s2} alt="" />
      </div>
      <h2>DESIGN OVERVIEW</h2>
      <div className="row">
        <div className="col">
          <div className="description">
            <h1> Snappy </h1>
            <h3> Rhino </h3>
            <p>
              With a team of Dartmouth students we conceptualized an effective face mask solution and developed a looks-like prototype for the Next-Gen XPRIZE Mask competition.
            </p>
            <div>
              <div className="col">
                <h2>DIMENSIONS</h2>
                <img src={s3} alt="" />
                <img src={s4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h2>MATERIALS</h2>
          <img src={s5} alt="" />
          <img src={s6} alt="" />
          <img src={s7} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Snappy;
