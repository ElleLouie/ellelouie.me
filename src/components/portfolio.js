/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Parallax from 'react-rellax';

import ppeImg from '../img/gen_cover.png';
import snapImg from '../img/snappy_cover.png';
import archImg from '../img/arch_cover.png';
import saImg from '../img/sa_cover.png';
import sculpImg from '../img/sculp_cover.png';
import pickImg from '../img/pick_cover.png';
import storiesImg from '../img/stories_cover.png';

import hydroImg from '../img/hydro_cover.png';
import fearImg from '../img/fear_cover.png';
import spillImg from '../img/spill_cover.png';
import dartImg from '../img/dart_cover.png';

function Portfolio(props) {
  return (
    <div>
      <div className="portfolio">
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
        <h3>click to see more</h3>
        <div className="portfolio_grid">
          <Parallax className="col col1" speed={-3}>
            <div className="box">
              <div className="img_detail">
                <img src={ppeImg} alt="" />
                <NavLink to="/portfolio/nextgen" className="img__description">
                  <h2>PPE Smart Helmet</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> SolidWorks </p><p className="img_tools"> 3D Printing </p><p className="img_tools"> Prototyping </p></div>
                </NavLink>
              </div>
            </div>
            <div className="box">
              <div className="img_detail">
                <img src={snapImg} alt="v1" />
                <NavLink to="/portfolio/snappy" className="img__description">
                  <h2>Snappy</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> rhino </p></div>
                </NavLink>
              </div>
            </div>
            <div className="box">
              <div className="img_detail">
                <img src={archImg} alt="v1" />
                <NavLink to="/portfolio/pavilion" className="img__description">
                  <h2>Architecture: Artist Pavilion</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> rhino </p><p className="img_tools"> photoshop </p><p className="img_tools"> prototyping </p></div>
                </NavLink>
              </div>
            </div>
          </Parallax>
          <Parallax className="col col2 rellax" speed={6}>
            <div className="box">
              <div className="img_detail">
                <img src={saImg} alt="v1" />
                <NavLink to="/portfolio/studioart" className="img__description">
                  <h2>studio art</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> printmaking </p><p className="img_tools"> drawing </p></div>
                </NavLink>
              </div>
            </div>
            <div className="box">
              <div className="img_detail">
                <img src={sculpImg} alt="v1" />
                <NavLink to="/portfolio/technolosis" className="img__description">
                  <h2>Scuplture: technolosis</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> plaster </p></div>
                </NavLink>
              </div>
            </div>
            <div className="box">
              <div className="img_detail">
                <img src={pickImg} alt="v1" />
                <NavLink to="/portfolio/pickpocked" className="img__description">
                  <h2>Pickpocked Blocked</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> user research </p><p className="img_tools"> solidworks </p><p className="img_tools"> prototyping </p></div>
                </NavLink>
              </div>
            </div>
            <div className="box">
              <div className="img_detail">
                <img src={storiesImg} alt="v1" />
                <NavLink to="/portfolio/ourstories" className="img__description">
                  <h2>OurStories</h2>
                  <div className="white_line" />
                  <div className="img_tools_container"><p className="img_tools"> figma </p><p className="img_tools"> react </p></div>
                </NavLink>
              </div>
            </div>
          </Parallax>
        </div>
        <h1> minis </h1>
        <div className="minis">
          <div className="minis_img">
            <img src={hydroImg} alt="v1" />
            <NavLink to="/portfolio/hydro" className="minis_description">
              <h2>Hydroplanter</h2>
              <div className="white_line" />
              <div className="img_tools_container"><p className="img_tools"> user research </p><p className="img_tools"> mural </p><p className="img_tools"> prototyping </p></div>
            </NavLink>
          </div>
          <div className="minis_img">
            <img src={fearImg} alt="v1" />
            <NavLink to="/portfolio/fearnot" className="minis_description">
              <h2>fear not</h2>
              <div className="white_line" />
              <div className="img_tools_container"><p className="img_tools"> html/css </p><p className="img_tools"> mural </p><p className="img_tools"> prototyping </p></div>
            </NavLink>
          </div>
          <div className="minis_img">
            <img src={spillImg} alt="v1" />
            <NavLink to="/portfolio/spillthebeans" className="minis_description">
              <h2>spill the beans</h2>
              <div className="white_line" />
              <div className="img_tools_container"><p className="img_tools"> react </p></div>
            </NavLink>
          </div>
          <div className="minis_img">
            <img src={dartImg} alt="v1" />
            <NavLink to="/portfolio/dartterm" className="minis_description">
              <h2>dartterm</h2>
              <div className="white_line" />
              <div className="img_tools_container"><p className="img_tools"> user research </p> </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
