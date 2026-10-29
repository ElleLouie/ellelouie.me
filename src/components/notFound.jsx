import { NavLink } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className="not_found">
      <h1>page not found</h1>
      <NavLink to="/" className="link">back home</NavLink>
    </div>
  );
}

export default NotFound;
