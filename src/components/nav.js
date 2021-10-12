import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

function Nav(props) {
  return (
    <div>
      <nav>
        <NavLink to="/" className="nav-logo" exact><h1>el</h1></NavLink>
        <NavLink to="/" className="nav-item" exact>home</NavLink>
        <NavLink to="/about" className="nav-item">about</NavLink>
        <NavLink to="/portfolio" className="nav-item">portfolio</NavLink>
        <NavLink to="/contact" className="nav-item">contact</NavLink>
      </nav>
      <Menu right className="burger">
        <a className="menu-item" id="home" href="/"><span>home</span></a>
        <a className="menu-item" id="about" href="/about"><span>about</span></a>
        <a className="menu-item" id="contact" href="/portfolio"><span>portfolio</span></a>
        <a className="menu-item" id="contact" href="/contact"><span>contact</span></a>
      </Menu>
    </div>
  );
}
export default Nav;
