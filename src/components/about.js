import React from 'react';

import rIcon from '../img/icon/r.png';
import swIcon from '../img/icon/sw.png';
import psIcon from '../img/icon/ps.png';
import aiIcon from '../img/icon/ai.png';

function About(props) {
  return (
    <div className="about">
      <div className="name about_name">
        <span>e</span>
        <span>l</span>
        <span>l</span>
        <span>e</span>
        <span> </span>
        <span>l</span>
        <span>o</span>
        <span>u</span>
        <span>i</span>
        <span>e</span>
      </div>
      <div className="about_items">
        <div className="about_facts">
          <h1>who am i?</h1>
          <div className="facts">
            <i className="fa fa-globe" /> <p className="facts_detail">california</p>
          </div>
          <div className="facts">
            <i className="fa fa-university" /> <p className="facts_detail">dartmouth college</p>
          </div>
          <div className="facts">
            <i className="fa fa-book" /> <p className="facts_detail">engineering modified with studio art, CS minor</p>
          </div>
        </div>
        <div className="about_bio">
          <h1>about me</h1>
          <p>
            Hi, I&apos;m Elle Louie! Throughout my time at Dartmouth, I have
            cultivated a passion around the creative and collaborative design process. I truly love exploring the intersection between the technical side of engineering
            and the creativity of studio art and have learned the incredible value behind both.
            In addition, my time on the Dartmouth basketball team has taught me the value of vulnerability when serving in a position of leadership
            and has truly challenged me to strengthen my communication skills. As a thoughtful person, I hope to contribute my curiosity and energy towards creating
            meaningful work to best serve my community!
          </p>
        </div>
      </div>
      <h1>skills</h1>
      <div className="icons">
        <div className="icons_item">
          <i className="fab fa-java fa-border fa-3x" />
          <h4>Java</h4>
        </div>
        <div className="icons_item">
          <i className="fab fa-python fa-border fa-3x" />
          <h4>Python</h4>
        </div>
        <div className="icons_item">
          <i className="fab fa-react fa-border fa-3x" />
          <h4>React</h4>
        </div>
        <div className="icons_item">
          <i className="fab fa-html5 fa-border fa-3x" />
          <h4>HTML/CSS</h4>
        </div>
        <div className="icons_item">
          <i className="fab fa-js fa-border fa-3x" />
          <h4>JavaScript</h4>
        </div>
        <div className="icons_item">
          <i className="fab fa-figma fa-border fa-3x" />
          <h4>Figma</h4>
        </div>
      </div>
      <div className="icons">
        <div className="icons_item">
          <img src={rIcon} alt="v1" />
          <h4>Rhino</h4>
        </div>
        <div className="icons_item">
          <img src={swIcon} alt="v1" />
          <h4>SolidWorks</h4>
        </div>
        <div className="icons_item">
          <img src={psIcon} alt="v1" />
          <h4>Photoshop</h4>
        </div>
        <div className="icons_item">
          <img src={aiIcon} alt="v1" />
          <h4>Illustrator</h4>
        </div>
      </div>
      <h1>other interests</h1>
      <p className="about_interest"> I find learning new sports such as surfing, golf and tennis, trying new foods, and meeting new people
        the best way to spend my free time.
      </p>
    </div>
  );
}

export default About;
