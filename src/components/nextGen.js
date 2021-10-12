import React from 'react';

import fullImg from '../img/nextgen/full.png';
import full2Img from '../img/nextgen/full2.png';
import full3Img from '../img/nextgen/full3.png';
import halfImg from '../img/nextgen/nextgen.png';
import half2Img from '../img/nextgen/nextgen 2.png';

import dImg from '../img/nextgen/d-v1.png';
import d2Img from '../img/nextgen/d-v2.png';
import d3Img from '../img/nextgen/d-v3.png';
import eImg from '../img/nextgen/e-v1.png';

function NextGen(props) {
  return (
    <div className="NextGen">

      <div className="row row1">
        <img src={fullImg} alt="" />
        <img src={full2Img} alt="" />
        <img src={full3Img} alt="" />
        <img src={halfImg} alt="" />
        <img src={half2Img} alt="" />
      </div>
      <div className="description">
        <h1> PPE Smart Helmet </h1>
        <h3> SolidWorks 3D Printing Prototyping</h3>
        <p>
          Through this internship I had the opportunity to work with a team of Dartmouth students and professors in developing a
          PPE mask with embedded smart technology at the peak of the pandemic through Dartmouth&apos;s Thayer School of
          Engineering. I specifically assisted in concept development and rapid prototyping, gaining skills in Solidworks and 3D printing.
          Lastly, I served as the entreprenuenial lead, conducting market research and applied to grants to fund the PPE Smart Helmet.

        </p>
      </div>
      <div className="row row2">
        <div className="items">
          <img src={dImg} alt="" />
          <img src={d2Img} alt="" />
        </div>
        <div className="items">
          <img src={d3Img} alt="" />
          <img src={eImg} alt="" />
        </div>

      </div>
    </div>
  );
}

export default NextGen;
