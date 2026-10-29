import { NavLink, useParams } from 'react-router-dom';
import projects from '../data/projects';
import NotFound from './notFound';
import ProjectCover from './projectCover';

function Project(props) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <NotFound />;

  return (
    <article className="page project">
      <header className="page_header">
        <NavLink to="/portfolio" className="eyebrow back_link">&larr; All work</NavLink>
        <h1 className="page_title">{project.title}</h1>
        {project.context && <p className="project_context">{project.context}</p>}
        <div className="tags">
          {project.tools.map((tool) => <span key={tool} className="tag">{tool}</span>)}
        </div>
      </header>
      <section className="split">
        <p className="split_label eyebrow">Overview</p>
        <div className="project_body">
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {project.link && (
            <a href={project.link.href} className="button" target="_blank" rel="noreferrer">{project.link.label}</a>
          )}
        </div>
      </section>
      {!project.images?.length && (
        <div className="project_banner">
          {project.cover ? <img src={project.cover} alt="" /> : <ProjectCover index={projects.indexOf(project)} />}
        </div>
      )}
      <div className="project_images">
        {(project.images || []).map((src, i) => (
          <img key={src} src={src} alt={`${project.title} ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </article>
  );
}

export default Project;
