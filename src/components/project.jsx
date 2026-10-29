import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects';
import NotFound from './notFound';

function Project(props) {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug && p.cover);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <NotFound />;

  return (
    <article className="page project">
      <Link to="/#work" className="back_link">&larr; all projects</Link>
      <p className="card_medium">{project.medium}</p>
      <h1 className="page_title">{project.title}</h1>
      <p className="lead">{project.note}</p>
      {project.link && (
        <a href={project.link.href} className="button" target="_blank" rel="noreferrer">{project.link.label}</a>
      )}
      <div className="project_images">
        {[project.cover, ...(project.images || [])].map((src, i) => (
          <img key={src} src={src} alt={`${project.title} ${i + 1}`} loading={i ? 'lazy' : 'eager'} />
        ))}
      </div>
    </article>
  );
}

export default Project;
