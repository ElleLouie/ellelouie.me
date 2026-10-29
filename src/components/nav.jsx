import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/portfolio', label: 'portfolio' },
  { to: '/contact', label: 'contact' },
];

function Nav(props) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className={open ? 'nav_open' : ''}>
      <NavLink to="/" className="nav-logo" end onClick={close}><h1>el</h1></NavLink>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? 'close menu' : 'open menu'}
        aria-expanded={open}
        aria-controls="nav-links"
        onClick={() => setOpen(!open)}
      >
        <i className={open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
      </button>
      <div id="nav-links" className="nav-links">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} className="nav-item" end={to === '/'} onClick={close}>{label}</NavLink>
        ))}
      </div>
    </nav>
  );
}
export default Nav;
