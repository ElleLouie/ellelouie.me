import { Link } from 'react-router-dom';

const links = [
  { to: '/#work', label: 'Projects' },
  { to: '/#about', label: 'About' },
  { to: '/#contact', label: 'Contact' },
];

function Nav(props) {
  return (
    <header className="site_header">
      <nav>
        <Link to="/" className="nav-logo">elle <em>louie</em></Link>
        <div className="nav-links">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} className="nav-item label">{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
export default Nav;
