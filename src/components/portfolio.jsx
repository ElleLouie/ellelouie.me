import { NavLink } from 'react-router-dom';
import projects from '../data/projects';
import ProjectCover from './projectCover';

function Portfolio(props) {
  return (
    <div className="page portfolio">
      <header className="page_header">
        <p className="eyebrow">02 &mdash; Work</p>
        <h1 className="page_title">Selected <em>work</em></h1>
      </header>
      {projects.length === 0 ? (
        <div className="portfolio_empty">
          <p className="eyebrow">In progress</p>
          <p className="lead">New projects are on the way. <em>Check back soon.</em></p>
        </div>
      ) : (
        <div className="portfolio_grid">
          {projects.map((project, i) => (
            <NavLink key={project.slug} to={`/portfolio/${project.slug}`} className="card">
              <div className="card_image">
                {project.cover ? <img src={project.cover} alt="" loading="lazy" /> : <ProjectCover index={i} />}
              </div>
              <div className="card_meta">
                {project.context && <p className="eyebrow">{project.context}</p>}
                <h2>{project.title}</h2>
              </div>
              <div className="tags">
                {project.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
