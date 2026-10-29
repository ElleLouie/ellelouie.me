import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className="page not_found">
      <p className="label">404</p>
      <h1 className="page_title">Page <em>not found</em></h1>
      <Link to="/" className="button label">Back home</Link>
    </div>
  );
}

export default NotFound;
