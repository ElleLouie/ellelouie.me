import { NavLink } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className="page not_found">
      <p className="eyebrow">404</p>
      <h1 className="page_title">Page <em>not found</em></h1>
      <NavLink to="/" className="button">Back home</NavLink>
    </div>
  );
}

export default NotFound;
