import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Work' },
  { to: '/contact', label: 'Contact' },
];

function Nav(props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className={open ? 'site_header nav_open' : 'site_header'}>
      <nav>
        <NavLink to="/" className="nav-logo" end onClick={close}>
          Elle <em>Louie</em>
        </NavLink>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
        <div id="nav-links" className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink key={to} to={to} className="nav-item" onClick={close}>{label}</NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default Nav;
