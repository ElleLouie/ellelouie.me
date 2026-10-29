import { NavLink } from 'react-router-dom';
import projects from '../data/projects';

function Portfolio(props) {
  return (
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
      {projects.length === 0 ? (
        <p className="portfolio_empty">new work coming soon</p>
      ) : (
        <>
          <h3>click to see more</h3>
          <div className="portfolio_grid">
            {projects.map((project) => (
              <NavLink key={project.slug} to={`/portfolio/${project.slug}`} className="card">
                <img src={project.cover} alt={project.title} loading="lazy" />
                <div className="img__description">
                  <h2>{project.title}</h2>
                  <div className="white_line" />
                  <div className="img_tools_container">
                    {project.tools.map((tool) => <p key={tool} className="img_tools">{tool}</p>)}
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Portfolio;
