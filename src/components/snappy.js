import React from 'react';

function Snappy(props) {
  return (
    <div className="Snappy">
      <div className="row">
        <img src="/src/img/snappy/snappy-ov1.png" alt="" />
        <img src="/src/img/snappy/snappy-ov2.png" alt="" />
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
                <img src="/src/img/snappy/snappy-dimensions1.png" alt="" />
                <img src="/src/img/snappy/snappy-dimensions2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <h2>MATERIALS</h2>
          <img src="/src/img/snappy/snappy-materials1.png" alt="" />
          <img src="/src/img/snappy/snappy-materials2.png" alt="" />
          <img src="/src/img/snappy/snappy-materials3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Snappy;
