import React from 'react';
import { NavLink } from 'react-router-dom';

function Home(props) {
  return (
    <div className="home">
      <h1>el</h1>
      <div className="name">
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
      <div className="line" />
      <div className="home_nav">
        <NavLink to="/about" className="nav-item-home">about</NavLink>
        <NavLink to="/portfolio" className="nav-item-home">portfolio</NavLink>
        <NavLink to="/contact" className="nav-item-home">contact</NavLink>
      </div>
      <div className="flower_container">
        <div className="flower__head" />
      </div>
      <div className="home_social">
        <a href="https://www.linkedin.com/in/elle-louie-7920a5193/"> <i className="fa fa-linkedin" /></a>
        <a href="https://www.facebook.com/elle.louie"> <i className="fa fa-facebook" /></a>
        <a href="https://github.com/ElleLouie"> <i className="fa fa-github" /></a>
      </div>
    </div>
  );
}

export default Home;
